import { FIREBASE_COLLECTIONS, ICEservers } from 'config';
import firestore from './firebase';

export class RtcService {
  private static instance: RtcService;
  private pc: RTCPeerConnection;
  private callsCollection: any;
  private constructor() {
    this.pc = new RTCPeerConnection(ICEservers);
    this.callsCollection = firestore.collection(FIREBASE_COLLECTIONS.CALLS);
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    return new RtcService();
  }
  getCollections(id?: string) {
    const callDoc = this.callsCollection.doc(id);
    const offersCollection = callDoc.collection(FIREBASE_COLLECTIONS.OFFERS);
    const answersCollection = callDoc.collection(FIREBASE_COLLECTIONS.ANSWERS);
    return { callDoc, offersCollection, answersCollection };
  }

  async createAnOffer() {
    const {
      callDoc,
      offersCollection,
      answersCollection,
    } = this.getCollections();
    // Get candidates for caller, save to db
    this.pc.onicecandidate = event => {
      event.candidate && offersCollection.add(event.candidate.toJSON());
    };

    // Create offer
    const offerDescription = await this.pc.createOffer();
    await this.pc.setLocalDescription(offerDescription);

    const offer = {
      sdp: offerDescription.sdp,
      type: offerDescription.type,
    };

    await callDoc.set({ offer });

    // Listen for remote answer
    callDoc.onSnapshot((snapshot: any) => {
      const data = snapshot.data();
      if (!this.pc.currentRemoteDescription && data?.answer) {
        const answerDescription = new RTCSessionDescription(data.answer);
        this.pc.setRemoteDescription(answerDescription);
      }
    });

    // When answered, add candidate to peer connection
    answersCollection.onSnapshot((snapshot: any) => {
      snapshot.docChanges().forEach((change: any) => {
        if (change.type === 'added') {
          const candidate = new RTCIceCandidate(change.doc.data());
          this.pc.addIceCandidate(candidate);
        }
      });
    });

    return callDoc.id;
  }

  async joinACall(callid: string) {
    const {
      callDoc,
      offersCollection,
      answersCollection,
    } = this.getCollections(callid);
    this.pc.onicecandidate = event => {
      event.candidate && answersCollection.add(event.candidate.toJSON());
    };

    const callData = (await callDoc.get()).data();

    const offerDescription = callData?.offer;
    await this.pc.setRemoteDescription(
      new RTCSessionDescription(offerDescription),
    );

    const answerDescription = await this.pc.createAnswer();
    await this.pc.setLocalDescription(answerDescription);

    const answer = {
      type: answerDescription.type,
      sdp: answerDescription.sdp,
    };

    await callDoc.update({ answer });

    offersCollection.onSnapshot((snapshot: any) => {
      snapshot.docChanges().forEach((change: any) => {
        console.log(change);
        if (change.type === 'added') {
          let data = change.doc.data();
          this.pc.addIceCandidate(new RTCIceCandidate(data));
        }
      });
    });
  }
  getPC() {
    return this.pc;
  }
}

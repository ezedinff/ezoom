export const firebaseConfig = {
};

export const ICEservers = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
    },
  ],
  iceCandidatePoolSize: 10,
};

export enum FIREBASE_COLLECTIONS {
  CALLS = 'calls',
  OFFERS = 'offers',
  ANSWERS = 'answers',
}

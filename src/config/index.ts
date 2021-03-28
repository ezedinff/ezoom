export const firebaseConfig = {
  apiKey: 'AIzaSyC4j8uj72JPjw7epRVlsX1QEUTRrq7mn6o',
  authDomain: 'ezoom-4dc6c.firebaseapp.com',
  projectId: 'ezoom-4dc6c',
  storageBucket: 'ezoom-4dc6c.appspot.com',
  messagingSenderId: '632869661658',
  appId: '1:632869661658:web:bfac588c02d55f4ed0aee3',
  measurementId: 'G-5R8MQE97XR',
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

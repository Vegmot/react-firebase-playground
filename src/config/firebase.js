import firebase from 'firebase';

let firebaseConfig = {
  apiKey: 'AIzaSyCh6QvHVUYdFH4D-aIxef8OPGaXenkkVJQ',
  authDomain: 'agamotto-playground.firebaseapp.com',
  projectId: 'agamotto-playground',
  storageBucket: 'agamotto-playground.appspot.com',
  messagingSenderId: '579036151867',
  appId: '1:579036151867:web:d5a4ecd1f598f9e7155c1e',
};

// Initialize and export Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

// Initialize and export analytics db firebase
// export const firebaseAnalytics = firebase.initializeApp({
//   databaseURL: "https://usageanalytics.firebaseio.com"
// }, 'firebaseAnalytics');

export default firebase;

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBCgzJL6Wjy20qFJAPudE5tAqljK7tFf68",
  authDomain: "c58-realtime-database.firebaseapp.com",
  databaseURL: "https://c58-realtime-database-default-rtdb.firebaseio.com",
  projectId: "c58-realtime-database",
  storageBucket: "c58-realtime-database.appspot.com",
  messagingSenderId: "491996441756",
  appId: "1:491996441756:web:d9eb0d098ce3597c6d1159"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()
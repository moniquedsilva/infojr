import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAfyMmfLwxHf9lTcP5IVHq1Hzyux2HlHMI",
  authDomain: "login-a39ac.firebaseapp.com",
  projectId: "login-a39ac",
  storageBucket: "login-a39ac.appspot.com",
  messagingSenderId: "795943022263",
  appId: "1:795943022263:web:4d54c2fcd75db938352732"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
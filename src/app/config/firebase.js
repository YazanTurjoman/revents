import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDIXhKFPqjx8mmkvlhnGSB4PMwy2lYtttE",
  authDomain: 'revents-aad53.firebaseapp.com',
  databaseURL: 'https://revents-aad53.firebaseio.com',
  projectId: 'revents-aad53',
  storageBucket: 'revents-aad53.appspot.com',
  messagingSenderId: '804656587703',
  appId: '1:804656587703:web:88ffde5f1bbba975fe7e32',
  measurementId: 'G-SXPFHY07S9',
};

firebase.initializeApp(firebaseConfig);

export default firebase;

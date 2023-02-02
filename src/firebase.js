import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBA0FNnjKAWaxBcrxJxYthKeQ4qqgHSx3I',
  authDomain: 'react-firebase-todo-fe2b3.firebaseapp.com',
  projectId: 'react-firebase-todo-fe2b3',
  storageBucket: 'react-firebase-todo-fe2b3.appspot.com',
  messagingSenderId: '841647232518',
  appId: '1:841647232518:web:c2b19a9074bd2ad6f01587',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

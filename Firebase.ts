import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyA1wkheHVQIwm5okMyvUpHyuBfiu8Wp-c4",
  authDomain: "wimining-ce758.firebaseapp.com",
  projectId: "wimining-ce758",
  storageBucket: "wimining-ce758.appspot.com",
  messagingSenderId: "650505891936",
  appId: "1:650505891936:web:663230a1a2c2b4eb5b1305",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const store = getStorage(app);

// // // // // // // // // //

const useAuth = () => {
  const [currentUser_, setCurrentUser_] = useState();
  useEffect(() => {
    // @ts-ignore
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser_(user));
    return unsub;
  }, []);
  return currentUser_;
};

const checkUp_ = () => {
  return auth.currentUser == null;
};

const signUp_ = (email: any, password: any) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const signIn_ = (email: any, password: any) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const signOut_ = () => {
  return signOut(auth);
};

const createResume_ = (data_: any) => {
  const collection_ = collection(db, "resumes");
  setDoc(doc(collection_, data_.uuid), data_)
  .then(() => {
    console.log('Data written to Firestore');
  })
  .catch((error) => {
    console.error('Error writing to Firestore:', error);
  });
};

const getLead = async (data_: any) => {
  const collection_ = collection(db, `leads`);
  const lead_ = doc(collection_, data_);

  try {
    const docSnapshot = await getDoc(lead_);
    if (docSnapshot.exists()) {
      return docSnapshot.data();
    } else {
      console.log('Document does not exist');
      throw new Error('Document does not exist');
    }
  } catch (error) {
    console.error('Error getting document:', error);
    throw new Error('Error getting document');
  }
};

const getResume = async (data_: any) => {
  const collection_ = collection(db, `resumes`);
  const resume_ = doc(collection_, data_);

  try {
    const docSnapshot = await getDoc(resume_);
    if (docSnapshot.exists()) {
      return docSnapshot.data();
    } else {
      console.log('Document does not exist');
      throw new Error('Document does not exist');
    }
  } catch (error) {
    console.error('Error getting document:', error);
    throw new Error('Error getting document');
  }
};

const uploadImage = async (file: File) => {
  if(file){console.log(file)}
  const storageRef = ref(store, 'images/' + new Date().getTime()); // Assuming 'store' is your Firebase Storage reference

  try {
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    console.log('Image uploaded successfully');
    return downloadURL;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

// // // // // // // // // //

export {
  db,
  uploadImage,
  store,
  auth,
  getResume,
  getLead,
  checkUp_,
  signUp_,
  signIn_,
  signOut_,
  createResume_,
  useAuth,
};

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
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
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

const getOptions = async () => {
  const logistics_ = collection(db, "options/logistics/options");
  const materials_ = collection(db, "options/materials/options");
  const equipment_ = collection(db, "options/equipment/options");
  const data_logistics = await getDocs(logistics_);
  const data_materials = await getDocs(materials_);
  const data_equipment = await getDocs(equipment_);
  const data_logistics_ = data_logistics.docs.map((doc_) => ({
    ...doc_.data(),
    id: doc_.id,
  }));
  const data_materials_ = data_materials.docs.map((doc_) => ({
    ...doc_.data(),
    id: doc_.id,
  }));
  const data_equipment_ = data_equipment.docs.map((doc_) => ({
    ...doc_.data(),
    id: doc_.id,
  }));
  return {
    logistics: data_logistics_,
    materials: data_materials_,
    equipment: data_equipment_
  }
};

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

// // // // // // // // // //

export {
  db,
  store,
  auth,
  getOptions,
  checkUp_,
  signUp_,
  signIn_,
  signOut_,
  useAuth,
};

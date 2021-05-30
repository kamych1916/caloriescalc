import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAdinp3OLRtELWRQ2qP39wcvvkp09CSsUY",
  authDomain: "medications-65616.firebaseapp.com",
  projectId: "medications-65616",
  storageBucket: "medications-65616.appspot.com",
  messagingSenderId: "819051305997",
  appId: "1:819051305997:web:23dbaff976c4227cafc944",
  measurementId: "G-ZV8BQH7W43"
};

// let firebaseApp = null;
let db = null;
if (!firebase.apps.length) {
  // firebaseApp = firebase.initializeApp(firebaseConfig);
  db = firebase
    .initializeApp(firebaseConfig)
    .firestore()
    .collection("products");
}

export const auth = firebase.auth();

export const createMeds = med => {
  return db.doc("mushrooms").update(med);
};

export const getMeds = async id => {
  const med = await db.doc(id).get();
  console.log(med);
  return med.exists ? med.data() : null;
};

export const updateMeds = (id, med) => {
  return db.doc(id).update(med);
};

export const deleteMeds = id => {
  return db.doc(id).delete();
};

export const useLoadMeds = () => {
  const meds = ref([]);
  const close = usersCollection.onSnapshot(snapshot => {
    meds.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return meds;
};

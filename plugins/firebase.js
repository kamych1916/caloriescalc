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

export const createProducts = (categorie, product) => {
  return db.doc(categorie).update(product);
};

export const createCategorie = categorie => {
  db.doc(categorie).set({});
};

export const getProducts = async id => {
  const med = await db.doc(id).get();
  return med.exists ? med.data() : null;
};

export const getCategories = () => {
  let categs = [];
  db.get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        categs.push(doc.id);
      });
    })
    .catch(error => alert("🤕" + error));
  return categs;
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

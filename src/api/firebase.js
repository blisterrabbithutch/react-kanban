import firebase from 'firebase';
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
// import { getCards } from '../features/cards/selectors';

export const initializeFirebase = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyDIZa3wFEnTnaqOe_GNpIVLOc4AXSamds4",
    authDomain: "kanban-custom.firebaseapp.com",
    databaseURL: "https://kanban-custom.firebaseio.com",
    projectId: "kanban-custom",
    storageBucket: "kanban-custom.appspot.com",
    messagingSenderId: "756329390269",
    appId: "1:756329390269:web:6e50b4f79283638d0597d4",
    measurementId: "G-094373YZE5"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  console.log('firebase – ', firebase);
};

const createDesk = (deskName) => {
  // Add and submit to database a new document in collection "cities"
  const db = firebase.firestore();

  return db.collection("desks")
    .add({
      name: deskName,
    })
    .then((docRef) => docRef.get())
};

const editDesk = (id, name) => {
  const db = firebase.firestore();
  return db.collection('desks').doc(id).update({name});
};

const getDesks = () => {
  // Запрос в базу данных за досками
  const db = firebase.firestore();

  return db.collection('desks').get().then((querySnapshot) => {
    const desks = [];

    querySnapshot.forEach((doc) => {
      desks.push({
        id: doc.id,
        name: doc.data().name,
      });
    });

    return desks;
  });
};


const deleteDesk = (id) => {
  const db = firebase.firestore();

  return db.collection("desks")
    .doc(id).delete();
};

const getColumns = (deskId) => {
  const db = firebase.firestore();

  return db.collection("columns").where("id", '==', deskId).get()
    .then((querySnapshot) => {
      const columns = [];

      querySnapshot.forEach( (doc) => {
        const {deskId, name} =  doc.data();
        columns.push({
          id: doc.id,
          deskId,
          name
        })
      });

      return columns;
    });
};

const deleteColumn = (id) => {
  const db = firebase.firestore();

  return db.collection("columns")
    .doc(id)
    .delete();
};

const editColumn = (id, name) => {
  const db = firebase.firestore();
  return db.collection('columns').doc(id).update({ name });
};

const getCards = (columnId) => {
  const db = firebase.firestore();

  return db.collection("cards").where('id', '==', columnId).get().then((querySnapshot) => {
    const cards = [];

    querySnapshot.forEach( (doc) => {
      const {deskId, name} =  doc.data();
      cards.push({
        id: doc.id,
        deskId,
        name
      })
    });

    return cards;
  });
};

const getCard = (cardId) => {
  const db = firebase.firestore();

  return db.collection("cards").doc(cardId).get().then((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    }
  });
};

const editCard = (id, data = {}) => {
  const db = firebase.firestore();

  return db.collection('cards').doc(id).update(data);
};

const deleteCard = (id) => {
  const db = firebase.firestore();
  return db.collection("cards")
    .doc(id).delete();
};

const createCard = (cardName, columnId) => {
  // Add and submit to database a new document in collection "cities"
  const db = firebase.firestore();

  return db.collection("cards")
    .add({
      name: cardName,
      id: columnId
    })
    .then((docRef) => docRef.get());
};

const createColumn = (deskName, deskId) => {
  // Add and submit to database a new document in collection "cities"
  const db = firebase.firestore();

  return db.collection("columns")
    .add({
      name: deskName,
      id: deskId,
    })
    .then((docRef) => docRef.get());
};

export const api = {
  createDesk,
  editDesk,
  getDesks,
  deleteDesk,
  getColumns,
  editColumn,
  deleteColumn,
  getCards,
  deleteCard,
  createCard,
  createColumn,
  getCard,
  editCard,
};
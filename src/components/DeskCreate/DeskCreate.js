import React, {useState} from 'react';
import {Button, Div, Card, FormLayout, Input} from "@vkontakte/vkui/dist/index";
import PropTypes from 'prop-types';
import Icon24AddOutline from '@vkontakte/icons/dist/24/add_outline';
import firebase from "firebase";
import CreateForm from '../CreateForm/CreateForm';

const DeskCreate = ({onCreate}) => {

  const createDesk = (deskName) => {

    // Add and submit to database a new document in collection "cities"
    const db = firebase.firestore();

    return db.collection("desks")
      .add({
        name: deskName,
      })
      .then((docRef) => docRef.get())
      .then((doc) => {
        console.log(doc.id, doc.data());
        onCreate({
          id: doc.id,
          ...doc.data()
        })
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  };

  return (
    <CreateForm onSubmit={createDesk} placeholder="Введите название доски" actionTitle="Создать доску"/>
  )
};

DeskCreate.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default DeskCreate;
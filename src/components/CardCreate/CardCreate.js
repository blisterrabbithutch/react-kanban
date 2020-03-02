import React, {useState} from 'react';
import {Button, Div, Card, FormLayout, Input} from "@vkontakte/vkui/dist/index";
import PropTypes from 'prop-types';
import Icon24AddOutline from '@vkontakte/icons/dist/24/add_outline';
import firebase from "firebase";
import CreateForm from '../CreateForm/CreateForm';

const CardCreate = ({onCreate, columnId}) => {

  const createCard = (cardName) => {

    // Add and submit to database a new document in collection "cities"
    const db = firebase.firestore();

    return db.collection("cards")
      .add({
        name: cardName,
        id: columnId
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
    <CreateForm onSubmit={createCard} placeholder="Введите название карточки" actionTitle="Создать карточку"/>
  )
};

CardCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
  columnId: PropTypes.string.isRequired,
};

export default CardCreate;
import React, {useState} from 'react';
import {Button, Div, Card, FormLayout, Input} from "@vkontakte/vkui/dist/index";
import PropTypes from 'prop-types';
import Icon24AddOutline from '@vkontakte/icons/dist/24/add_outline';
import firebase from "firebase";
import CreateForm from '../CreateForm/CreateForm';
import '../../panels/Columns/Columns.css';

const ColumnCreate = ({onCreate, deskId}) => {

  const createColumn = (deskName) => {

    // Add and submit to database a new document in collection "cities"
    const db = firebase.firestore();

    return db.collection("columns")
      .add({
        name: deskName,
        id: deskId,
      })
      .then((docRef) => docRef.get())
      .then((doc) => {
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
    <Div className="Column">
      <CreateForm onSubmit={createColumn} placeholder="Введите название колонки" actionTitle="Создать колонку"/>
    </Div>
  )
};

ColumnCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
  deskId: PropTypes.string.isRequired,
};

export default ColumnCreate;
import React, {useState, useEffect} from 'react';
import DeskItem from "../DeskItem/DeskItem";
import {CardGrid} from "@vkontakte/vkui/dist/index";
import PropTypes from 'prop-types';
import firebase from "firebase";

const DeskList = ({ desks, onDelete, onLoadDesks, onDeskClick }) => {
  // Запрос в базу данных за досками
  useEffect(() => {
    const db = firebase.firestore();

    db.collection('desks').get().then((querySnapshot) => {
      const desks = [];

      querySnapshot.forEach((doc) => {
        desks.push({
          id: doc.id,
          name: doc.data().name,
        });
      });

      onLoadDesks(desks);
    });
  }, []);

  if (!desks.length) {
    return null;
  }

  return (
    <CardGrid>
      {desks.map(({ id, name }) => (
        <DeskItem
          onClick={() => onDeskClick(id)}
          onDelete={onDelete}
          key={id}
          id={id}
        >
          {name}
        </DeskItem>
      ))}
    </CardGrid>
  );
};

DeskList.propTypes = {
  desks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  onDelete: PropTypes.func.isRequired,
  onLoadDesks: PropTypes.func.isRequired,
};


export default DeskList;
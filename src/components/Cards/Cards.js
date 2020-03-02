import React, {useEffect, useState} from 'react';
import ColumnCard from "../ColumnCard/ColumnCard";
import CardCreate from "../CardCreate/CardCreate";
import {CardGrid} from "@vkontakte/vkui/dist/index";
import firebase from "firebase";
import PropTypes from 'prop-types';
import './Cards.css'

const Cards = ({columnId}) => {
  const [cards, setCards] = useState([]);

  const addCard = (card) => {
    setCards([...cards, card])
  };
  const removeCard = (removeId) => {
    setCards(cards.filter(({id}) => id !== removeId))
  };

  // запрос в базу данных за карточками
  useEffect(() => {
    const db = firebase.firestore();

    db.collection("cards").where('id', '==', columnId).get().then((querySnapshot) => {
      const cards = [];

      querySnapshot.forEach( (doc) => {
        const {deskId, name} =  doc.data();
        cards.push({
          id: doc.id,
          deskId,
          name
        })
      });

      setCards(cards);
    });

  }, []);

  return (
    <CardGrid className="Cards__list">
      {cards.map(({id, name}) => <ColumnCard key={id} id={id} onDelete={removeCard}>{name}</ColumnCard>)}
      <CardCreate columnId={columnId} onCreate={addCard}/>
    </CardGrid>
  )
};

Cards.propTypes = {
  columnId: PropTypes.string.isRequired
};

export default Cards;
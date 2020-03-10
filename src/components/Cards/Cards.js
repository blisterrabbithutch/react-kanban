import React, {useEffect, useContext} from 'react';
import Context from '../App/Context';
import ColumnCard from "../ColumnCard/ColumnCard";
import CardCreate from "../CardCreate/CardCreate";
import {CardGrid} from "@vkontakte/vkui/dist/index";
import PropTypes from 'prop-types';
import './Cards.css'
import {getCards} from "../../actions";

const Cards = ({columnId}) => {
  const { cards, setCards } = useContext(Context);

  // запрос в базу данных за карточками
  useEffect(() => {
    getCards(columnId).then(setCards);
  }, []);

  return (
    <CardGrid className="Cards__list">
      {cards.map(({id, name}) => <ColumnCard key={id} id={id}>{name}</ColumnCard>)}
      <CardCreate columnId={columnId}/>
    </CardGrid>
  )
};

Cards.propTypes = {
  columnId: PropTypes.string.isRequired
};

export default Cards;
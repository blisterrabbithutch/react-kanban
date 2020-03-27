import React, {useEffect, Fragment, useContext} from 'react';
import Context from '../App/Context';
import ColumnCard from "../ColumnCard/ColumnCard";
import CardCreate from "../CardCreate/CardCreate";
import {CardGrid, Div} from "@vkontakte/vkui/dist/index";
import PropTypes from 'prop-types';
import './Cards.css'
import {getCards} from "../../actions/firebase";
import { useDispatch, useSelector } from 'react-redux';
import { setCards } from '../../actions/actions';

const Cards = ({columnId}) => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);

  // запрос в базу данных за карточками
  useEffect(() => {
    getCards(columnId).then((cards) => dispatch(setCards(cards)));
  }, []);

  return (
    <Fragment>
      <CardGrid className="Cards__list">
        {cards.map(({id, name}) => <ColumnCard key={id} id={id}>{name}</ColumnCard>)}
      </CardGrid>
      <Div className="Cards__create-button-wrapper">
        <CardCreate columnId={columnId}/>
      </Div>
    </Fragment>
  )
};

Cards.propTypes = {
  columnId: PropTypes.string.isRequired
};

export default Cards;
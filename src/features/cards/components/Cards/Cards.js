import React, {useEffect, Fragment, memo} from 'react';
import CardCreate from "../CardCreate/CardCreate";
import {CardGrid, Div} from "@vkontakte/vkui/dist/index";
import PropTypes from 'prop-types';
import './Cards.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../actions';
import { getCards } from '../../selectors';
import ColumnCard from '../../../columns/components/ColumnCard/ColumnCard';

const Cards = ({columnId}) => {
  const dispatch = useDispatch();
  const cards = useSelector(getCards);

  // запрос в базу данных за карточками
  useEffect(() => {
    dispatch(fetchCards(columnId))
  }, [dispatch, columnId]);

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

export default memo(Cards);
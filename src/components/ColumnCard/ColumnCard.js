import React from 'react';
import {Card, Div} from "@vkontakte/vkui/dist/index";
import PropTypes from 'prop-types';
import '../../panels/Columns/Columns.css';
import './ColumnCard.css';
import {deleteCard} from "../../actions/firebase";
import {removeCard} from '../../actions/actions';
import {useDispatch} from 'react-redux';

const ColumnCard = ({children, id }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    deleteCard(id)
      .then(() => dispatch(removeCard(id)))
      .catch(console.error);
  };

  return (
    <Card size='l' className=""  mode='outline'>
      <Div className="ColumnCard__wrapper">
        {children}
      </Div>
    </Card>
  );
};

ColumnCard.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default ColumnCard;
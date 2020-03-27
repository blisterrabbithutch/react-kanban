import React from 'react';
import PropTypes from 'prop-types';
import { createCard } from "../../actions/firebase";
import CardCreateForm from './CardCreateForm';
import { useDispatch } from 'react-redux';
import { addCard } from '../../actions/actions';


const CardCreate = ({ columnId }) => {
  const dispatch = useDispatch();

  const createItem = (cardName) => {
    return createCard(cardName, columnId)
      .then((doc) => {
        console.log(doc.id, doc.data());
        dispatch(addCard({
          id: doc.id,
          ...doc.data()
        }))
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  };

  return (
    <CardCreateForm onSubmit={createItem} />
  )
};

CardCreate.propTypes = {
  columnId: PropTypes.string.isRequired,
};

export default CardCreate;
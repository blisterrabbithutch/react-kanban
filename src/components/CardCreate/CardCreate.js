import React, {useContext} from 'react';
import Context from '../App/Context';
import PropTypes from 'prop-types';
import { createCard } from "../../actions";
import CreateForm from '../CreateForm/CreateForm';

const CardCreate = ({ columnId }) => {
  const { addCard } = useContext(Context);

  const createItem = (cardName) => {
    return createCard(cardName, columnId)
      .then((doc) => {
        console.log(doc.id, doc.data());
        addCard({
          id: doc.id,
          ...doc.data()
        })
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  };

  return (
    <CreateForm onSubmit={createItem} placeholder="Введите название карточки" actionTitle="Создать карточку"/>
  )
};

CardCreate.propTypes = {
  columnId: PropTypes.string.isRequired,
};

export default CardCreate;
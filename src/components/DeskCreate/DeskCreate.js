import React, {useContext} from 'react';
import {Button, Div, Card, FormLayout, Input} from "@vkontakte/vkui/dist/index";
import PropTypes from 'prop-types';
import Context from "../App/Context";
import CreateForm from '../CreateForm/CreateForm';
import { createDesk } from '../../actions/index';

const DeskCreate = () => {
  const { addDesk } = useContext(Context);

  const createItem = (deskName) => (
    createDesk(deskName)
      .then((doc) => {
        console.log(doc.id, doc.data());
        addDesk({
          id: doc.id,
          ...doc.data()
        })
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
    })
  );

  return (
    <CreateForm onSubmit={createItem} placeholder="Введите название доски" actionTitle="Создать доску"/>
  )
};

// DeskCreate.propTypes = {
//   onCreate: PropTypes.func.isRequired
// }

export default DeskCreate;
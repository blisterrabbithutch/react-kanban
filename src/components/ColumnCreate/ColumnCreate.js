import React, {useContext} from 'react';
import Context from '../App/Context';
import { Div } from "@vkontakte/vkui/dist/index";
import PropTypes from 'prop-types';
import {createColumn} from "../../actions";
import CreateForm from '../CreateForm/CreateForm';
import '../../panels/Columns/Columns.css';


const ColumnCreate = () => {
  const { addColumn, activeDesk } = useContext(Context);

  const createItem = (deskName) => (
    createColumn(deskName, activeDesk.id)
      .then((doc) => {
        addColumn({
          id: doc.id,
          ...doc.data()
        })
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      })
  );

  return (
    <Div className="Column">
      <CreateForm onSubmit={createItem} placeholder="Введите название колонки" actionTitle="Создать колонку"/>
    </Div>
  )
};

export default ColumnCreate;
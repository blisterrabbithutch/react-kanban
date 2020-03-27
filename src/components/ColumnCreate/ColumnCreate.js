import React from 'react';
import { Div } from "@vkontakte/vkui/dist/index";
import { createColumn } from "../../actions/firebase";
import ColumnCreateForm from './ColumnCreateForm';
import '../../panels/Columns/Columns.css';
import {useRoute} from 'react-router5';
// import { addColumn } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import {addColumn} from "../../actions/actions";

const ColumnCreate = () => {
  const dispatch = useDispatch();
  const desks = useSelector((state) => state.desks);

  const { route: { params : { deskId } } } = useRoute();
  const desk = desks.find(({ id }) => id === deskId) || {}; 

  const createItem = (deskName) => (
    createColumn(deskName, desk.id)
      .then((doc) => {
        dispatch(addColumn({
          id: doc.id,
          ...doc.data()
        }))
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      })
  );

  return (
    <Div className="Column">
      <ColumnCreateForm onSubmit={createItem}/>
    </Div>
  )
};

export default ColumnCreate;
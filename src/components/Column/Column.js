import React, {Fragment} from 'react';
import {PanelHeader, Button, Div, Card, CardGrid, Header} from "@vkontakte/vkui/dist/index";
import DeskCreate from "../DeskCreate/DeskCreate";
import DeskList from "../DeskList/DeskList";
import PropTypes from 'prop-types';
import ColumnCard from "../ColumnCard/ColumnCard";
import Cards from "../Cards/Cards";
import '../../panels/Columns/Columns.css';
import ColumnCreate from "../ColumnCreate/ColumnCreate";
import firebase from "firebase";

const Column = ({name, id, onDelete}) => {
  const deleteColumn = () => {
    const db = firebase.firestore();
    db.collection("columns")
      .doc(id)
      .delete()
      .then(() => onDelete(id))
      .catch(console.error);
  };

  return (
    <Div className="Column">
      <div className="Column__header">
        <Header className="Column__title">{name}</Header>
        <Button mode='destructive' onClick={deleteColumn}>Удалить</Button>
      </div>

      <Card className="Column__content">
        <Cards columnId={id}/>
      </Card>
    </Div>
  )
};

Column.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Column;
import React, {Fragment} from 'react';
import {PanelHeader, Div, Card, CardGrid, Button} from "@vkontakte/vkui/dist/index";
import DeskCreate from "../DeskCreate/DeskCreate";
import DeskList from "../DeskList/DeskList";
import PropTypes from 'prop-types';
import '../../panels/Columns/Columns.css';
import './ColumnCard.css';
import firebase from "firebase";

const ColumnCard = ({children, id, onDelete}) => {
  const deleteCard = () => {
    const db = firebase.firestore();
    db.collection("cards")
      .doc(id).delete()
      .then(() => onDelete(id))
      .catch(console.error);
  };

  return (
    <Card size='l' className="">
      <Div className="ColumnCard__wrapper">
        {children}
        <Button mode="destructive" onClick={deleteCard}>Удалить</Button>
      </Div>
    </Card>
  );
};

ColumnCard.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default ColumnCard;
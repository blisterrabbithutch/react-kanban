import React, {useContext} from 'react';
import Context from '../App/Context';
import {Div, Card, Button} from "@vkontakte/vkui/dist/index";
import PropTypes from 'prop-types';
import '../../panels/Columns/Columns.css';
import './ColumnCard.css';
import {deleteCard} from "../../actions";

const ColumnCard = ({children, id }) => {
  const { removeCard } = useContext(Context);

  const deleteItem = () => {
    deleteCard(id)
      .then(() => removeCard(id))
      .catch(console.error);
  };

  return (
    <Card size='l' className="">
      <Div className="ColumnCard__wrapper">
        {children}
        <Button mode="destructive" onClick={deleteItem}>Удалить</Button>
      </Div>
    </Card>
  );
};

ColumnCard.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default ColumnCard;
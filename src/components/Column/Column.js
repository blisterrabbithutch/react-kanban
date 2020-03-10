import React, { useContext } from 'react';
import Context from '../App/Context';
import {Button, Div, Card, Header} from "@vkontakte/vkui/dist/index";
import PropTypes from 'prop-types';
import Cards from "../Cards/Cards";
import '../../panels/Columns/Columns.css';
import {deleteColumn} from "../../actions";

const Column = ({name, id}) => {
  const { removeColumn } = useContext(Context);

  const deleteItem = () => {
    deleteColumn(id)
      .then(() => removeColumn(id))
      .catch(console.error);
  };

  return (
    <Div className="Column">
      <div className="Column__header">
        <Header className="Column__title">{name}</Header>
        <Button mode='destructive' onClick={deleteItem}>Удалить</Button>
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
};

export default Column;
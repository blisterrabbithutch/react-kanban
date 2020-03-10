import React, { useContext } from 'react';
import Context from '../App/Context';
import PropTypes from 'prop-types';
import {Card, Div, Button} from "@vkontakte/vkui/dist/index";
import './DeskItem.css';
import {deleteDesk} from "../../actions";


const DeskItem = ({id, children}) => {
  const { removeDesk, goToColumns } = useContext(Context);

  const goToColumnPanel = () => goToColumns(id);

  const deleteItem = (evt) => {
    evt.stopPropagation();
    deleteDesk(id)
      .then(() => removeDesk(id))
      .catch(console.error);
  };

  return (
    <Card size='l' onClick={goToColumnPanel}>
      <Div className='DeskItem__content'>
        {children}
        <Button mode='destructive' onClick={deleteItem}>Удалить</Button>
      </Div>
    </Card>
  )
};


DeskItem.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf([PropTypes.node])]).isRequired,
};

export default DeskItem;
import React from 'react';
import PropTypes from 'prop-types';
import {useRouter} from 'react-router5';
import { pages } from '../../router';
import {Card, Div, Button} from "@vkontakte/vkui/dist/index";
import './DeskItem.css';
import { deleteDesk } from "../../actions/firebase";
import { removeDesk } from '../../actions/actions'; 
import { useDispatch } from 'react-redux';


const DeskItem = ({id, children}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const goToColumnPanel = () => router.navigate(pages.COLUMNS, { deskId: id }); 

  const deleteItem = (evt) => {
    evt.stopPropagation();
    deleteDesk(id)
      .then(() => dispatch(removeDesk(id)))
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
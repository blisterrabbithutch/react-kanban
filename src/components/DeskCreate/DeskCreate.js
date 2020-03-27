import React from 'react';
import CreateForm from '../CreateForm/CreateForm';
import { createDesk } from '../../actions/firebase';
import { useDispatch } from 'react-redux';
import { addDesk } from '../../actions/actions';

const DeskCreate = () => {
  const dispatch = useDispatch();


  const createItem = (deskName) => (
    createDesk(deskName)
      .then((doc) => { 
        dispatch(addDesk({
          id: doc.id,
          ...doc.data()
        }))
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
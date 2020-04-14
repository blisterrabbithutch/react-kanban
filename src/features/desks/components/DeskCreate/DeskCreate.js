import React, { useCallback, memo } from 'react';
import CreateForm from '../../../../components/CreateForm/CreateForm';
import { useDispatch } from 'react-redux';
import { createDesk } from '../../actions';

const DeskCreate = () => {
  const dispatch = useDispatch();


  const createItem = useCallback((deskName) => (
    dispatch(createDesk(deskName))
  ), [dispatch]);

  return (
    <CreateForm onSubmit={createItem} placeholder="Введите название доски" actionTitle="Создать доску"/>
  )
};

// DeskCreate.propTypes = {
//   onCreate: PropTypes.func.isRequired
// }

export default memo(DeskCreate);
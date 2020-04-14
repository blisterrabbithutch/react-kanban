import React, { useCallback, memo } from 'react';
import CreateForm from '../../../../components/CreateForm/CreateForm';
import { useDispatch } from 'react-redux';
import { editDesk } from '../../actions';
import PropTypes from 'prop-types';
import { modes } from "../../../../components/CreateForm/hooks";

const DeskEdit = ({ id, name, onSubmit }) => {
  const dispatch = useDispatch();


  const editItem = useCallback((deskName) => {
    return dispatch(editDesk(id, deskName)).finally(onSubmit);
  }, [dispatch, id]);

  return (
    <CreateForm
      onSubmit={editItem}
      placeholder="Введите название доски"
      actionTitle="Изменить доску"
      initialValue={name}
      initialMode={modes.form}
      onCancel={onSubmit}
    />
  )
};

DeskEdit.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default memo(DeskEdit);
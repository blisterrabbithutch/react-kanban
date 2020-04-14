import React, { useMemo, useCallback, memo } from 'react';
import { Div } from "@vkontakte/vkui/dist/index";
import ColumnCreateForm from './ColumnCreateForm';
import '../../../columns/panels/Columns/Columns.css';
import {useRoute} from 'react-router5';
import { useDispatch, useSelector } from 'react-redux';
import { createColumn } from '../../actions';
import { getDesks } from '../../../desks/selectors';

const ColumnCreate = () => {
  const dispatch = useDispatch();
  const desks = useSelector(getDesks);
  const { route: { params: { deskId } } } = useRoute();
  const createItem = useCallback((name) => dispatch(createColumn(name, deskId)), [deskId, dispatch]);

  return (
    <Div className="Column">
      <ColumnCreateForm onSubmit={createItem} />
    </Div>
  );
};

export default memo(ColumnCreate);
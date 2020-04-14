import * as actionType from "./types";
import { api } from '../../api/firebase';
import { getDesks } from '../desks/selectors';
import {fetchDesks} from "../desks/actions";

export const addColumn = (column) => ({ type: actionType.ADD_COLUMN, payload: { column } });
export const removeColumn = (removeId) => ({ type: actionType.REMOVE_COLUMN, payload: { removeId } });
export const setColumns = (columns) => ({ type: actionType.SET_COLUMNS, payload: { columns } });
export const replaceColumn = (id, name) => ({ type: actionType.REPLACE_COLUMN, payload: { id, name } });

export const fetchColumns = (deskId) => (dispatch, getState) => {
    const desks = getDesks(getState());
    const desk = desks.find(({ id }) => id === deskId) || {};

    // может быть зацикиливание если ввести несуществующий deskId
    if (!desk.id) {
      return dispatch(fetchDesks()).then(() => dispatch(fetchColumns(deskId )));
    }

    return api.getColumns(desk.id)
      .then((columns) => {
        dispatch({ type: 'fetchColumnsSuccess' });
        dispatch(setColumns(columns));
      })
      .catch(() => dispatch({ type: 'fetchColumnsFail' }))
};

export const deleteColumn = (id) => (dispatch) => (
    api.deleteColumn(id)
      .then(() => {
        dispatch({ type: 'deleteColumnSuccess' });
        dispatch(removeColumn(id));
      })
      .catch(() => dispatch({ type: 'deleteColumnFail' }))
);

export const editColumn = (id, name) => (dispatch) => (
  api.editColumn(id, name)
    .then(() => {
      dispatch({ type: actionType.EDIT_COLUMN_SUCCESS });
      dispatch(replaceColumn(id, name));
    })
    .catch(() => dispatch({ type: actionType.EDIT_COLUMN_FAIL }))
);

export const createColumn = (name, id) => (dispatch) => (
    api.createColumn(name, id)
      .then((doc) => {
        dispatch({ type: 'createColumnSuccess' });
        dispatch(addColumn({ id: doc.id, ...doc.data() }));
      })
      .catch(() => dispatch({ type: 'createColumnFail' }))
);
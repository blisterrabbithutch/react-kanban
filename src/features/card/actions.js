import * as actionType from './types';
import { api } from '../../api/firebase';
import {deleteCard as deleteItem} from "../cards/actions";

const replaceCard = (id, data = {}) => ({ type: actionType.REPLACE_CARD, payload: data });
const removeCard = (id, data = {}) => ({ type: actionType.REMOVE_CARD });

const setCard = ({id, name, text}) => ({
    type: actionType.SET_CARD,
    payload: {
        id,
        name,
        text,
    },
});

export const fetchCard = (cardId) => (dispatch) => (
    api.getCard(cardId)
      .then((card) => {
        dispatch({ type: actionType.FETCH_CARD_SUCCESS });
        dispatch(setCard(card));
      })
      .catch(() => dispatch({ type: actionType.FETCH_CARD_FAIL }))
);

export const editCard = (id, data) => (dispatch) => (
  api.editCard(id, data)
    .then(() => {
      dispatch({ type: actionType.EDIT_CARD_SUCCESS });
      dispatch(replaceCard(id, data));
    })
    .catch((err) => console.log(err))
);

export const deleteCard = (id) => (dispatch) => {
  return dispatch(deleteItem(id))
    .then(() => dispatch(removeCard()));
};


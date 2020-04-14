import * as actionType from "./types";
import { api } from '../../api/firebase';

export const addCard = (card) => ({ type: actionType.ADD_CARD, payload: { card } });
export const removeCard  = (removeId) => ({ type: actionType.REMOVE_CARD, payload: { removeId } });
export const setCards = (cards) => ({ type: actionType.SET_CARDS, payload: { cards } });

export const fetchCards = (columnId) => (dispatch) => (
    api.getCards(columnId)
      .then((cards) => {
        console.log(cards);
        dispatch({ type: actionType.FETCH_CARDS_SUCCESS });
        dispatch(setCards(cards));
      })
      .catch(() => dispatch({ type: actionType.FETCH_CARDS_FAIL }))
);

export const deleteCard = (id) => (dispatch) => (
    api.deleteCard(id)
      .then(() => {
        dispatch({ type: actionType.DELETE_CARD_SUCCESS });
        dispatch(removeCard(id));
      })
      .catch(() => dispatch({ type: actionType.DELETE_CARD_FAIL }))
  );

export const createCard = (cardName, columnId) => (dispatch) => (
    api.createCard(cardName, columnId)
      .then((doc) => {
        dispatch({ type: actionType.CREATE_CARD_SUCCESS });
        dispatch(addCard({
          id: doc.id,
          ...doc.data()
        }));
      })
      .catch(() => dispatch({ type: actionType.CREATE_CARD_FAIL }))
);

  

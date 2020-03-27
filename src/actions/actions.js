import * as actionType from "./types";


export const addColumn = (column) => ({ type: actionType.ADD_COLUMN, payload: { column } });
export const removeColumn  = (removeId) => ({ type: actionType.REMOVE_COLUMN, payload: { removeId } });
export const setColumns  = (columns) => ({ type: actionType.SET_COLUMNS, payload: { columns } });

export const addDesk = (desk) => ({ type: actionType.ADD_DESK, payload: { desk } });
export const removeDesk  = (removeId) => ({ type: actionType.REMOVE_DESK, payload: { removeId } });
export const setDesks  = (desks) => ({ type: actionType.SET_DESKS, payload: { desks } });

export const addCard = (card) => ({ type: actionType.ADD_CARD, payload: { card } });
export const removeCard  = (removeId) => ({ type: actionType.REMOVE_CARD, payload: { removeId } });
export const setCards  = (cards) => ({ type: actionType.SET_CARDS, payload: { cards } });

export const setActivePanel  = (panel) => ({ type: actionType.SET_ACTIVE_PANEL, payload: { panel } });
export const changeRoute  = ({ route }) => setActivePanel(route.name);

export const setPopout = (popout) => ({ type: actionType.SET_POPOUT, payload: { popout } });


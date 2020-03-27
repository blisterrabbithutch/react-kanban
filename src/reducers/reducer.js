import * as actionType from "../actions/types";

const initialState = {
    desks: [],
    columns: [],
    cards: [],
    activePanel: null,
    popout: null,
}

export const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionType.ADD_COLUMN: {
            const { column } = payload;
            const columns = [...state.columns, column];

            return {
                ...state,
                columns,
            };
        }

        case actionType.SET_COLUMNS: {
            const { columns } = payload;

            return {
                ...state,
                columns,
            };
        }

        case actionType.REMOVE_COLUMN: {
            const { removeId } = payload;
            const columns = state.columns.filter(({ id }) => id !== removeId);

            return {
                ...state,
                columns,
            };
        }

        case actionType.ADD_DESK: {
            const { desk } = payload;
            const desks = [...state.desks, desk];

            return {
                ...state,
                desks,
            };
        }

        case actionType.SET_DESKS: {
            const { desks } = payload;

            return {
                ...state,
                desks,
            };
        }

        case actionType.REMOVE_DESK: {
            const { removeId } = payload;
            const desks = state.desks.filter(({ id }) => id !== removeId);

            return {
                ...state,
                desks,
            };
        }

        case actionType.SET_ACTIVE_PANEL: {
            const { panel } = payload;

            return {
                ...state,
                activePanel: panel,
            };
        }

        default: {
            return state;
        }

        case actionType.ADD_CARD: {
            const { card } = payload;
            const cards = [...state.cards, card];

            return {
                ...state,
                cards,
            };
        }

        case actionType.SET_CARDS: {
            const { cards } = payload;

            return {
                ...state,
                cards,
            };
        }

        case actionType.REMOVE_CARD: {
            const { removeId } = payload;
            const cards = state.cards.filter(({ id }) => id !== removeId);

            return {
                ...state,
                cards,
            };
        }

        case actionType.SET_POPOUT: {
            const { popout } = payload;

            return {
                ...state,
                popout,
            };
        }
    }
    
    return state;
}
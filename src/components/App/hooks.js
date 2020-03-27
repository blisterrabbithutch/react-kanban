import React, { useState } from 'react';
import {useRoute} from 'react-router5';


const useColumnsState = () => {
  const [columns, setColumns] = useState([]);
  const addColumn = (column) => setColumns([...columns, column]);
  const removeColumn = (removeId) => setColumns(columns.filter(({ id }) => id !== removeId));

  return { columns, setColumns, addColumn, removeColumn };
};

const useDesksState = () => {
  const [desks, setDesks] = useState([]);
  const addDesk = (desk) => setDesks([...desks, desk]);
  const removeDesk = (removeId) => setDesks(desks.filter(({ id }) => id !== removeId));

  return { desks, setDesks, addDesk, removeDesk };
};

const useNavState = () => {
  const [activePanel, setActivePanel] = useState(null);
  const router = useRoute();

  const changeRoute = ({ route }) => {
    if (route) {
      setActivePanel(route.name);
    }
  };

  return { activePanel, changeRoute };
};

const useCardsState = () => {
  const [cards, setCards] = useState([]);
  const addCard = (card) => {
    setCards([...cards, card])
  };
  const removeCard = (removeId) => {
    setCards(cards.filter(({id}) => id !== removeId))
  };

  return {cards, setCards, addCard, removeCard};
};

const usePopoutState = () => {
  const [popout, setPopout] = useState(null);

  return {popout, setPopout};
};

export const useAppState = () => {
  const desksState = useDesksState();
  const columnsState = useColumnsState();
  const navState = useNavState();
  const cardsState = useCardsState();
  const popoutState = usePopoutState();

  return {
    ...desksState,
    ...columnsState,
    ...navState,
    ...cardsState,
    ...popoutState,
  };
};
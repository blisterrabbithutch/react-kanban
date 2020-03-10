import React, {useEffect, useContext} from 'react';
import DeskItem from "../DeskItem/DeskItem";
import {CardGrid} from "@vkontakte/vkui/dist/index";
import PropTypes from 'prop-types';
import {getDesks} from "../../actions";
import Context from '../../components/App/Context';

const DeskList = () => {
  const { setDesks, desks } = useContext(Context);

  useEffect(() => {
    getDesks()
      .then(desks => setDesks(desks))
  }, []);

  if (!desks.length) {
    return null;
  }

  return (
    <CardGrid>
      {desks.map(({ id, name }) => (
        <DeskItem
          key={id}
          id={id}
        >
          {name}
        </DeskItem>
      ))}
    </CardGrid>
  );
};

//


export default DeskList;
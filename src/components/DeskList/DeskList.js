import React, { useEffect } from 'react';
import DeskItem from "../DeskItem/DeskItem";
import {CardGrid} from "@vkontakte/vkui/dist/index";
import { useSelector, useDispatch } from 'react-redux';
import { getDesks } from '../../actions/firebase';
import { setDesks } from '../../actions/actions';


const DeskList = () => {
  const dispatch = useDispatch();
  const desks = useSelector((state) => state.desks);

  useEffect(() => {
    getDesks()
      .then((desks) => dispatch(setDesks(desks)))
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
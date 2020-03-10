import React, {Fragment, useEffect, useContext} from 'react';
import {PanelHeader, Div} from "@vkontakte/vkui/dist/index";
import DeskList from '../../components/DeskList/DeskList';
import DeskCreate from '../../components/DeskCreate/DeskCreate';

const Desks = () => {

  return (
    <Fragment>
      <PanelHeader>
        Мои доски
      </PanelHeader>

      <Div>
        <DeskCreate />
      </Div>

      <DeskList />

    </Fragment>
  )
};


export default Desks;
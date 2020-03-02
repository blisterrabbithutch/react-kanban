import React, {Fragment, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {PanelHeader, Div} from "@vkontakte/vkui/dist/index";
import DeskList from '../../components/DeskList/DeskList';
import DeskCreate from '../../components/DeskCreate/DeskCreate';

const Desks = ({onChangePanel, addDesk, removeDesk, setDesks, desks}) => {

  return (
    <Fragment>
      <PanelHeader>
        Мои доски
      </PanelHeader>

      <Div>
        <DeskCreate onCreate={addDesk}/>
      </Div>

      <DeskList desks={desks} onDelete={removeDesk} onLoadDesks={setDesks} onDeskClick={onChangePanel}/>

    </Fragment>
  )
};


Desks.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
}

export default Desks;
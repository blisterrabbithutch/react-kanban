import React, {Fragment, useEffect, useContext} from 'react';
import Context from '../../components/App/Context';
import './Columns.css';
import {PanelHeader, Div, Card, CardGrid, Gallery, PanelHeaderBack} from "@vkontakte/vkui/dist/index";
import PropTypes from 'prop-types';
import Column from "../../components/Column/Column";
import ColumnCreate from '../../components/ColumnCreate/ColumnCreate';
import {getColumns} from "../../actions";

const Columns = () => {
  const { goToDesks, setColumns, columns, activeDesk } = useContext(Context);

  // запрос в базу данных за колонками
  useEffect(() => {
    getColumns(activeDesk.id).then(setColumns);
  }, []);

  return (
    <Fragment>
      <PanelHeader left={<PanelHeaderBack onClick={goToDesks}/>}>
        Доска «{activeDesk.name}»
      </PanelHeader>

      <Gallery
        className="Columns__list"
        slideWidth="100%"
        align="center"
      >
        {columns.map(({id, name}) =>
          <Column name={name} key={id} id={id} />
        )}
        <ColumnCreate/>
      </Gallery>

    </Fragment>
  )
};


export default Columns;
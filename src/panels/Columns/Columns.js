import React, {Fragment, useEffect, useState} from 'react';
import {PanelHeader, Div, Card, CardGrid, Gallery, PanelHeaderBack} from "@vkontakte/vkui/dist/index";
import PropTypes from 'prop-types';
import Column from "../../components/Column/Column";
import firebase from 'firebase';
import ColumnCreate from '../../components/ColumnCreate/ColumnCreate';

const Columns = ({goBack, setColumns, columns, removeColumn, addColumn, desk }) => {
  // запрос в базу данных за колонками
  useEffect(() => {
    const db = firebase.firestore();

    db.collection("columns").where("id", '==', desk.id).get()
      .then((querySnapshot) => {
        const columns = [];

        querySnapshot.forEach( (doc) => {
          const {deskId, name} =  doc.data();
          columns.push({
            id: doc.id,
            deskId,
            name
          })
      });

      setColumns(columns);
    });

  }, []);

  return (
    <Fragment>
      <PanelHeader left={<PanelHeaderBack onClick={goBack}/>}>
        Доска «{desk.name}»
      </PanelHeader>

      <Gallery
        className="Columns__list"
        slideWidth="100%"
        align="center"
      >
        {columns.map(({id, name}) =>
          <Column name={name} key={id} id={id} onDelete={removeColumn}/>
        )}
        <ColumnCreate deskId={desk.id} onCreate={addColumn}/>
      </Gallery>

    </Fragment>
  )
};

Columns.propTypes = {
  goBack: PropTypes.func.isRequired,
  setColumns: PropTypes.func.isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    deskId: PropTypes.string.isRequired,
  })).isRequired,
  removeColumn: PropTypes.func.isRequired,
  addColumn: PropTypes.func.isRequired,
  desk: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default Columns;
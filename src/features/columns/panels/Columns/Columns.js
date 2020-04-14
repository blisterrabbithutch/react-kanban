import React, {Fragment, useEffect, useCallback, memo} from 'react';
import './Columns.css';
import {PanelHeader, Gallery, PanelHeaderBack} from "@vkontakte/vkui/dist/index";
import Column from "../../components/Column/Column";
import ColumnCreate from '../../components/ColumnCreate/ColumnCreate';
import { useRoute } from 'react-router5';
import { useSelector, useDispatch } from 'react-redux';
import { fetchColumns } from '../../actions';
import { getColumns } from '../../selectors';
import { getDesks } from '../../../desks/selectors';
import { goBack } from '../../../../app/actions';

const Columns = () => { 
  const dispatch = useDispatch();
  const columns = useSelector(getColumns);
  const desks = useSelector(getDesks);
  const goToDesks = useCallback(() => dispatch(goBack()), [dispatch]);
  const { route: { params: { deskId } } } = useRoute();
  const desk = desks.find(({ id }) => id === deskId) || {};

  // Запрос в базу данных за колонками
  useEffect(() => {
    dispatch(fetchColumns(deskId));
  }, [dispatch, deskId]);

  return (
    <Fragment>
      <PanelHeader left={<PanelHeaderBack onClick={goToDesks}/>}>
        Доска {desk.name ? `«${desk.name}»` : ''}
      </PanelHeader>

      <Gallery
        className="Columns__list"
        slideWidth="85%"
        align="left"
      >
        {columns.map(({id, name}) =>
          <Column name={name} key={id} id={id} />
        )}
        <ColumnCreate/>
      </Gallery>

    </Fragment>
  )
};


export default memo(Columns);
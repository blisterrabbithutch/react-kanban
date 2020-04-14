import React, { useCallback, memo } from 'react';
import {Button, Div, Card, Header} from "@vkontakte/vkui/dist/index";
import PropTypes from 'prop-types';
import Cards from '../../../cards/components/Cards/Cards';
import '../../../../features/columns/panels/Columns/Columns.css';
import {api} from "../../../../api/firebase";
import {ActionSheet, ActionSheetItem, IOS, usePlatform } from "@vkontakte/vkui";
import { useDispatch } from 'react-redux';
import { deleteColumn, editColumn } from '../../actions';
import { setPopout } from '../../../../app/actions';
import Icon16MoreHorizontal from '@vkontakte/icons/dist/16/more_horizontal';

const Column = ({name, id}) => {
  const dispatch = useDispatch();
  const osname = usePlatform();

  const deleteItem = useCallback(() => {
    api.deleteColumn(id)
      .then(() => dispatch(deleteColumn(id)))
      .catch(console.error);
  }, [dispatch, id]);

  const editItem = useCallback(() => {
    const newName = prompt('Введите название колонки', name);

    if (typeof newName !== 'string' || !newName.trim().length) {
      return;
    }

    dispatch(editColumn(id, newName));
  }, [dispatch, id, name]);

  const showColumnOptions = useCallback(() => {
    dispatch(setPopout((
      <ActionSheet onClose={() => dispatch(setPopout(null))}>
        <ActionSheetItem autoclose onClick={editItem}>Редактировать</ActionSheetItem>
        <ActionSheetItem autoclose mode="destructive" onClick={deleteItem}>Удалить</ActionSheetItem>
        {osname === IOS && <ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
      </ActionSheet>
    )));
  }, [dispatch, deleteItem, osname]);

  return (
    <Div className="Column">
      <div className="Column__header">
        <Header className="Column__title">{name}</Header>
        <Button
          mode='overlay_outline'
          onClick={showColumnOptions}
          className="Column__header-more-button"
        >
          <Icon16MoreHorizontal/>
        </Button>
      </div>

      <Card className="Column__content">
        <Cards columnId={id}/>
      </Card>
    </Div>
  )
};

Column.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default memo(Column);
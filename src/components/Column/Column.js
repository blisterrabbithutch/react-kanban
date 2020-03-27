import React, { useContext } from 'react';
import {Button, Div, Card, Header} from "@vkontakte/vkui/dist/index";
import PropTypes from 'prop-types';
import Cards from "../Cards/Cards";
import '../../panels/Columns/Columns.css';
import {deleteColumn} from "../../actions/firebase";
import Icon16MoreHorizontal from '@vkontakte/icons/dist/16/more_horizontal';
import {ActionSheet, ActionSheetItem, IOS, usePlatform } from "@vkontakte/vkui";
import { removeColumn, setPopout } from '../../actions/actions';
import { useDispatch } from 'react-redux';

const Column = ({name, id}) => {
  const dispatch = useDispatch();
  const osname = usePlatform();

  const deleteItem = () => {
    deleteColumn(id)
      .then(() => dispatch(removeColumn(id)))
      .catch(console.error);
  };

  const showColumnOptions = () => {
    dispatch(setPopout((
      <ActionSheet onClose={() => dispatch(setPopout(null))}>
        <ActionSheetItem autoclose mode="destructive" onClick={deleteItem}>Удалить</ActionSheetItem>
        {osname === IOS && <ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
      </ActionSheet>
    )));
  };

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

export default Column;
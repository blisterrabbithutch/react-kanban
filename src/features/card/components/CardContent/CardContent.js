import React, { Fragment, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getText, getId } from '../../selectors';
import {Div, Button, FixedLayout, Textarea} from '@vkontakte/vkui';
import './CardContent.css';
import TextContent from '../TextContent/TextContent';
import {deleteCard, editCard} from "../../actions";
import {goBack} from "../../../../app/actions";

const CardContent = () => {
    const dispatch = useDispatch();
    const text = useSelector(getText);
    const id = useSelector(getId);
    const [isEditableMode, setEditableMode] = useState(!text);
    const [value, setValue] = useState(text || '');
    const changeMode = useCallback(() => {
        if (isEditableMode && value.trim().length) {
            dispatch(editCard(id, { text: value }))
              .finally(() => setEditableMode(!isEditableMode));
        } else {
            setEditableMode(!isEditableMode);
        }
    }, [isEditableMode, value, dispatch, id]);
    const changeValue = useCallback(({ target: { value } }) => setValue(value), []);

    const deleteItem = useCallback(() => {
        dispatch(deleteCard(id)).finally(() => dispatch(goBack()));
    }, [dispatch, id]);

    return (
        <Fragment>
            { isEditableMode ? (
              <Div>
                  <Textarea value={value} onChange={changeValue} />
              </Div>
            ) : <TextContent/> }
            <FixedLayout vertical="bottom">
                <Div className="CardContent__buttons">
                    <Button mode="commerce" onClick={changeMode} size="l">{ isEditableMode ? 'Сохранить' : 'Изменить' }</Button>
                    <Button mode="destructive" onClick={deleteItem} size="l">Удалить</Button>
                </Div>
            </FixedLayout>
        </Fragment>
    )
};

export default CardContent;
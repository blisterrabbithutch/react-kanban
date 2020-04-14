import React, {memo} from 'react';
import {Button, Div, Card, FormLayout, Input} from "@vkontakte/vkui/dist/index";
import PropTypes from 'prop-types';
import Icon24AddOutline from '@vkontakte/icons/dist/24/add_outline';
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';
import './CardCreateForm.css';
import { useCreateForm } from '../../../../components/CreateForm/hooks';

const CardCreateForm = ({ onSubmit }) => {
  const {
    deskName,
    formReset,
    submit,
    setFormMode,
    onChangeInput,
    isButtonMode,
  } = useCreateForm({ onSubmit });

  if (isButtonMode) {
    return (
      <Button
        onClick={setFormMode}
        before={<Icon24AddOutline />}
        size="l"
        mode="outline"
        stretched
      >
        Добавить карточку
      </Button>
    );
  }

  return (
    <Card size="xl" style={{'width': '100%'}} mode='outline'>
      <FormLayout onSubmit={submit}>
        <Input
          value={deskName}
          autoFocus
          onChange={onChangeInput}
          placeholder="Введите название карточки"
          className="CardCreateForm__input"
        />
        <div className="CardCreateForm__inputs-section">
          <Button size='xl' onClick={submit} mode='commerce' className="CardCreateForm__button-add">
            Добавить
          </Button>
          <Button mode='tertiary'  onClick={formReset} className="CardCreateForm__button-decline">
            <Icon24Dismiss />
          </Button>
        </div>
      </FormLayout>
    </Card>
  )
};

CardCreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default memo(CardCreateForm);
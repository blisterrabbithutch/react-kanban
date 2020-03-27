import React, {useState} from 'react';
import {Button, Div, Card, FormLayout, Input} from "@vkontakte/vkui/dist/index";
import PropTypes from 'prop-types';
import Icon24AddOutline from '@vkontakte/icons/dist/24/add_outline';
import { useCreateForm } from "../CreateForm/hooks";

const ColumnCreateForm = ({ onSubmit }) => {
  const {
    mode,
    deskName,
    inputStatus,
    formReset,
    submit,
    setButtonMode,
    setFormMode,
    onChangeInput,
    isButtonMode,
  } = useCreateForm({onSubmit});

  if (isButtonMode) {
    return (
      <Button className="Button__create" mode="overlay_secondary" before={<Icon24AddOutline/>} size='xl' onClick={setFormMode}>
        Добавить колонку
      </Button>
    )
  }

  return (
    <Card size="xl" style={{'width': '100%'}} mode='shadow'>
      <FormLayout onSubmit={submit}>
        <Input
          value={deskName}
          autoFocus
          onChange={onChangeInput}
          status={inputStatus}
          placeholder="Введите название колонки"
        />
        <div>
          <Button size='xl' onClick={submit }>
            Добавить
          </Button>
          <Button mode='tertiary' size='xl' onClick={formReset}>
            Отменить
          </Button>
        </div>
      </FormLayout>
    </Card>
  )
};

ColumnCreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ColumnCreateForm;
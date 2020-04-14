import React, { memo } from 'react';
import {Button, Div, Card, FormLayout, Input} from "@vkontakte/vkui/dist/index";
import PropTypes from 'prop-types';
import Icon24AddOutline from '@vkontakte/icons/dist/24/add_outline';
import { modes, useCreateForm } from "./hooks";

const CreateForm = ({ onCancel, initialMode, initialValue, onSubmit, placeholder, actionTitle }) => {
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
  } = useCreateForm({ initialMode, initialValue, onSubmit, onCancel });

  if (isButtonMode) {
    return (
      <Button className="Button__create" before={<Icon24AddOutline/>} size='xl' onClick={setFormMode}>
        {actionTitle}
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
          placeholder={placeholder}
        />
        <div>
          <Button size='xl' onClick={ submit }>
            {actionTitle}
          </Button>
          <Button mode='tertiary' size='xl' onClick={formReset}>
            Отменить
          </Button>
        </div>
      </FormLayout>
    </Card>
  )
};

CreateForm.defaultProps = {
  initialValue: '',
  initialMode: modes.button,
  onCancel: null,
};

CreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  actionTitle: PropTypes.string.isRequired,
  onCancel: PropTypes.func,
  initialValue: PropTypes.string,
  initialMode: PropTypes.string,
};

export default memo(CreateForm);
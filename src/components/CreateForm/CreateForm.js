import React, {useState} from 'react';
import {Button, Div, Card, FormLayout, Input} from "@vkontakte/vkui/dist/index";
import PropTypes from 'prop-types';
import Icon24AddOutline from '@vkontakte/icons/dist/24/add_outline';

const modes = {
  button: 'button',
  form: 'form'
}

const statuses = {
  default: 'default',
  error: 'error',
}

const CreateForm = ({onSubmit, placeholder, actionTitle}) => {
  const [mode, setMode] = useState(modes.button);
  const [deskName, setDeskName] = useState('');
  const [inputStatus, setInputStatus] = useState('default');

  const formReset = () => {
    setInputStatus(statuses.default);
    setMode(modes.button);
    setDeskName('');
  };

  const submit = (evt) => {
    if (evt) {
      evt.preventDefault();
    }
    if (!deskName.trim().length) {
      setInputStatus(statuses.error);
      return;
    }
    onSubmit(deskName)
      .then(formReset)
  };

  if (mode === modes.button) {
    return (
      <Button className="Button__create" before={<Icon24AddOutline/>} size='xl' onClick={() => setMode(modes.form)}>
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
          onChange={(evt) => setDeskName(evt.target.value) }
          status={inputStatus}
          placeholder={placeholder}
        />
        <div>
          <Button size='xl' onClick={submit }>
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

CreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  actionTitle: PropTypes.string.isRequired,
};

export default CreateForm;
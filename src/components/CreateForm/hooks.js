import { useState } from 'react';

const modes = {
  button: 'button',
  form: 'form'
};

const statuses = {
  default: 'default',
  error: 'error',
};

export const useCreateForm = ({ onSubmit }) => {

  const [mode, setMode] = useState(modes.button);
  const [deskName, setDeskName] = useState('');
  const [inputStatus, setInputStatus] = useState('default');
  const onChangeInput = (event) => setDeskName(event.target.value);
  const isButtonMode = mode === modes.button;

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
    onSubmit(deskName).then(formReset);
  };

  const setFormMode = () => setMode(modes.form);
  const setButtonMode = () => setMode(modes.button);

  return {
    mode,
    deskName,
    inputStatus,
    formReset,
    submit,
    setButtonMode,
    setFormMode,
    onChangeInput,
    isButtonMode,
  };
};
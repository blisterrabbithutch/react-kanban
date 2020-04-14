import { useState, useCallback } from 'react';

export const modes = {
  button: 'button',
  form: 'form',
};

const statuses = {
  default: 'default',
  error: 'error',
};

export const useCreateForm = ({ initialMode = modes.button, initialValue = '', onSubmit, onCancel }) => {

  const [mode, setMode] = useState(initialMode);
  const [deskName, setDeskName] = useState(initialValue);
  const [inputStatus, setInputStatus] = useState('default');
  const onChangeInput = (event) => setDeskName(event.target.value);
  const isButtonMode = mode === modes.button;

  const formReset = useCallback(() => {
    onCancel && onCancel();
    setMode(modes.button);
    setInputStatus(statuses.default);
    setDeskName('');
  }, [onCancel]);

  const submit = useCallback((event) => {
    if (event) {
      event.preventDefault();
    }

    if (!deskName.trim().length) {
      setInputStatus(statuses.error);
      return;
    }

    onSubmit(deskName).then(formReset);
  }, [deskName, onSubmit, formReset]);

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
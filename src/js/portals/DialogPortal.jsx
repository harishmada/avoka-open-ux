import React from 'react';
import { useDialogContext } from '../providers/DialogProvider';
import * as dialogs from '../dialogs';

const DIALOG_TYPES = {
  ...dialogs,
};

const DialogPortal = () => {
  const { dialogType } = useDialogContext();
  const DialogToOpen = DIALOG_TYPES[dialogType];

  return DialogToOpen ? <DialogToOpen /> : null;
};

export default DialogPortal;

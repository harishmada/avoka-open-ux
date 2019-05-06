import React, { Component, useContext } from 'react';
import PropTypes from 'prop-types';
import { isSaveChallengeRequired } from '@transact-open-ux/core';

const DialogContext = React.createContext({});

class DialogProvider extends Component {
  constructor(props) {
    super(props);
    this.closeDialog = this.closeDialog.bind(this);
    this.openDialog = this.openDialog.bind(this);

    this.state = {
      dialogType: isSaveChallengeRequired() ? 'SaveChallenge' : null,
    };
  }

  closeDialog() {
    this.setState({
      dialogType: null,
    });
  }

  openDialog(dialogType) {
    this.setState({
      dialogType,
    });
  }

  render() {
    const { dialogType } = this.state;
    const { children } = this.props;
    const store = {
      closeDialog: this.closeDialog,
      openDialog: this.openDialog,
      dialogType,
    };

    return <DialogContext.Provider value={store}>{children}</DialogContext.Provider>;
  }
}

DialogProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

const DialogConsumer = DialogContext.Consumer;

const useDialogContext = () => useContext(DialogContext);

export { DialogProvider, DialogConsumer, useDialogContext };

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { useDialogContext } from '../providers/DialogProvider';

const styles = theme => ({
  dialog: {
    color: theme.palette.primary.contrastText,
  },
  content: {
    width: '100%',
    ...theme.mixins.container,
    ...theme.mixins.gutters(),
  },
  header: {
    width: '100%',
    display: 'flex',
    position: 'relative',
    paddingTop: 25,
    paddingBottom: 25,
    [theme.breakpoints.down('md')]: {
      paddingTop: 10,
      paddingBottom: 10,
    },
    ...theme.mixins.container,
  },
  closeBtn: {
    marginLeft: 'auto',
    fontSize: 40,
    [theme.breakpoints.up('md')]: {
      fontSize: 45,
    },
  },
  flex: {
    flex: 1,
  },
  paper: {
    background: fade(theme.palette.primary.main, 0.95),
  },
});

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

const initialState = {
  isOpen: true,
};

const FullScreenDialog = ({ classes, children, disableCloseBtn, ...rest }) => {
  const [state, setState] = useState(initialState);
  const { isOpen } = state;
  const { closeDialog, openDialog } = useDialogContext();

  const handleClose = () => {
    setState({
      isOpen: false,
    });
  };

  return (
    <Dialog
      classes={{ paper: classes.paper }}
      className={classes.dialog}
      fullScreen
      open={isOpen}
      onClose={handleClose}
      onExited={closeDialog}
      TransitionComponent={Transition}
      {...rest}
    >
      <div className={classes.header}>
        <IconButton
          color="inherit"
          onClick={handleClose}
          className={classes.closeBtn}
          disabled={disableCloseBtn}
          aria-label="Close"
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div className={classes.content}>
        {typeof children === 'function'
          ? children({ close: handleClose, open: openDialog })
          : children}
      </div>
    </Dialog>
  );
};

FullScreenDialog.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.func])
    .isRequired,
  disableCloseBtn: PropTypes.bool,
};

FullScreenDialog.defaultProps = {
  disableCloseBtn: false,
};

export default withStyles(styles)(FullScreenDialog);

import React from 'react';
import PropTypes from 'prop-types';
import { withTransact } from '@transact-open-ux/react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '../components/Dialog';
import cancel from '../../assets/images/cancel.svg';
import chat from '../../assets/images/chat.svg';
import save from '../../assets/images/finishLater.svg';

const styles = theme => ({
  list: {
    display: 'flex',
    minHeight: '60vh',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  listItem: {
    color: theme.palette.primary.contrastText,
    fontSize: '1.2rem',
    width: 'auto',
    [theme.breakpoints.up('md')]: {
      fontSize: '2.2rem',
    },
  },
});

const FunctionButton = ({ classes, onClick, text, src, alt }) => (
  <ListItem button onClick={onClick} component="a" className={classes.listItem}>
    {src && <img src={src} width={50} height={50} alt={alt} />}
    <ListItemText primary={text} disableTypography />
  </ListItem>
);

FunctionButton.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  onClick: PropTypes.func,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  src: PropTypes.string,
  alt: PropTypes.string,
};

FunctionButton.defaultProps = {
  onClick: null,
  text: null,
  src: null,
  alt: null,
};

const FunctionMenu = ({ classes, transact: { userSave, userCancel, getFormApi }, ...props }) => (
  <Dialog {...props}>
    {({ close, open }) => (
      <List component="nav" className={classes.list}>
        <FunctionButton
          text="Finish Later"
          onClick={() => {
            userSave(getFormApi().values);
            close();
          }}
          classes={classes}
          src={save}
          alt="Save Application"
        />
        <FunctionButton text="Live Chat" classes={classes} src={chat} alt="Open Live Chat" />
        <FunctionButton
          text="Resume Saved"
          onClick={() => open('SaveChallenge')}
          classes={classes}
          src={save}
          alt="Resume Saved Application"
        />
        <FunctionButton
          text="Cancel Your Application"
          onClick={() => {
            userCancel(getFormApi().values);
            close();
          }}
          classes={classes}
          src={cancel}
          alt="Cancel Application"
        />
      </List>
    )}
  </Dialog>
);

FunctionMenu.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  transact: PropTypes.shape({}),
};

FunctionMenu.defaultProps = {
  transact: {},
};

export default withTransact(withStyles(styles)(FunctionMenu));

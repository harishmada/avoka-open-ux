import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useDialogContext } from '../providers/DialogProvider';
import logo from '../../assets/images/vault_Logo.svg';

const styles = theme => ({
  root: {
    display: 'flex',
    paddingTop: 25,
    paddingBottom: 25,
    ...theme.mixins.container,
    [theme.breakpoints.down('md')]: {
      background: theme.mixins.gradient(
        theme.palette.secondary.light,
        theme.palette.secondary.main
      ),
      paddingTop: 10,
      paddingBottom: 10,
    },
    [theme.breakpoints.down('lg')]: {
      ...theme.mixins.gutters(),
    },
  },
  logo: {
    height: 35,
    justifyContent: 'center',
    alignSelf: 'center',
    [theme.breakpoints.up('md')]: {
      height: 65,
    },
  },
  menuBtn: {
    color: theme.palette.primary.contrastText,
    marginLeft: 'auto',
    fontSize: 40,
    [theme.breakpoints.up('md')]: {
      fontSize: 45,
    },
  },
});

const Header = ({ classes }) => {
  const { openDialog } = useDialogContext();

  return (
    <header className={classes.root}>
      <img src={logo} className={classes.logo} alt="Logo" />
      <IconButton
        onClick={() => openDialog('FunctionMenu')}
        className={classes.menuBtn}
        aria-label="Application Menu"
        aria-haspopup="true"
      >
        <MoreVertIcon fontSize="inherit" />
      </IconButton>
    </header>
  );
};

Header.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Header);

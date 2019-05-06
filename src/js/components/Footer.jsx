import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    paddingTop: 25,
    paddingBottom: 25,
    color: '#FFFFFF',
    [theme.breakpoints.down('md')]: {
      background: theme.palette.primary.main,
      ...theme.mixins.gutters(),
    },
    ...theme.mixins.container,
  },
});

const Footer = ({ classes }) => (
  <footer className={classes.root}>
    {`©${new Date().getFullYear()} Vault Bank. All rights reserved.`}
  </footer>
);

Footer.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Footer);

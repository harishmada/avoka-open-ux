import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Page from '../components/NavPage';
import declinedImg from '../../assets/images/declined.svg';

const styles = () => ({
  root: {
    textAlign: 'center',
  },
});

const SubmitSuccess = ({ classes }) => (
  <Page className={classes.root}>
    <Typography variant="h6">Your application has been cancelled.</Typography>
    <p>We&apos;ve withdrawn your application as you requested.</p>
    <img src={declinedImg} height="75" alt="Declined" />
    <p>We&apos;re very sorry to see you go, hopefully we&apos;ll see you soon.</p>
    <p>All the best from the Vault team!</p>
  </Page>
);

SubmitSuccess.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(SubmitSuccess);

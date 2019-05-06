import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Page from '../components/NavPage';
import successImg from '../../assets/images/verifyPrefill.svg';

const styles = () => ({
  root: {
    textAlign: 'center',
  },
});

const SaveSuccess = ({ classes }) => (
  <Page className={classes.root}>
    <Typography variant="h6">Your Application has been saved.</Typography>
    <p>
      Your application has been successfully saved, you can return anytime in the next 30 days to
      complete this application.
    </p>
    <img src={successImg} height="75" alt="Thumbs up" />
    <p>Check your email for details and link to resume this application from where you left off.</p>
    <p>Hope to see you soon!</p>
  </Page>
);

SaveSuccess.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(SaveSuccess);

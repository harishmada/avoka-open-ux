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

const SubmitSuccess = ({ classes }) => (
  <Page className={classes.root}>
    <Typography variant="h6">Application Complete.</Typography>
    <p>Your application has been successfully submitted.</p>
    <img src={successImg} height="75" alt="Thumbs up" />
    <p>
      Check your email for details about your application and any supporting documents, thanks for
      applying with Vault!
    </p>
  </Page>
);

SubmitSuccess.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(SubmitSuccess);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { isSaveChallengeRequired, getDataFromPath } from '@transact-open-ux/core';
import { useTransactContext } from '@transact-open-ux/react';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import Dialog from '../components/Dialog';
import Page from '../components/NavPage';
import SubmitButton from '../components/LoadingButton';

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  navBar: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 'auto',
  },
  grid: {
    paddingTop: 15,
  },
});

const SaveChallenge = ({ classes, ...props }) => {
  const { resumeForm, isLoading, getFormApi, validationErrors } = useTransactContext();
  return (
    <Dialog
      {...props}
      disableBackdropClick={isSaveChallengeRequired()}
      disableEscapeKeyDown={isSaveChallengeRequired()}
      disableCloseBtn={isSaveChallengeRequired()}
    >
      {({ close }) => {
        const { values } = getFormApi();
        const answer = getDataFromPath('Applicant.LastName', values);
        const trackingCode = getDataFromPath('$SaveChallenge.TrackingCode', values);

        return (
          <Page className={classes.root}>
            <Typography variant="h5">Open Your Saved Form</Typography>
            <Grid container spacing={24} className={classes.grid}>
              <Grid item xs>
                <Field
                  name="$SaveChallenge.TrackingCode"
                  required
                  autoFocus
                  label="Reference Code"
                  fullWidth
                  helperText="When you saved your form you should have been provided a reference code."
                  component={TextField}
                />
              </Grid>
              <Grid item xs>
                <Field
                  error={Boolean(
                    validationErrors.length &&
                      validationErrors[0].errorKey === 'stdErrs.formSaveChallengeInvalidAnswer'
                  )}
                  name="Applicant.LastName"
                  required
                  fullWidth
                  label="What is your surname?"
                  helperText={
                    validationErrors.length
                      ? 'Incorrect answer, please try again.'
                      : 'Your answer to this question must match the information you previously provided.'
                  }
                  component={TextField}
                />
              </Grid>
            </Grid>
            <div className={classes.navBar}>
              <SubmitButton
                onClick={async () => {
                  const { SaveChallengeSuccess } = await resumeForm(
                    answer,
                    trackingCode,
                    null,
                    close
                  );
                  if (SaveChallengeSuccess) {
                    close();
                  }
                }}
                disabled={!(answer && trackingCode)}
                loading={isLoading}
                color="primary"
              >
                Resume
              </SubmitButton>
            </div>
          </Page>
        );
      }}
    </Dialog>
  );
};

SaveChallenge.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(SaveChallenge);

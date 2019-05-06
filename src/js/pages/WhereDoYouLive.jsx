import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import Page from '../components/NavPage';

const WhereDoYouLive = () => (
  <Page>
    <Grid container spacing={24}>
      <Grid item xs={12} sm={8}>
        <Field
          name="Applicant.Address.Street"
          required
          label="Street"
          fullWidth
          component={TextField}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Field
          name="Applicant.Address.UnitNumber"
          required
          label="Unit"
          fullWidth
          component={TextField}
        />
      </Grid>
    </Grid>
    <Grid container spacing={24}>
      <Grid item xs={12} sm={7}>
        <Field
          name="Applicant.Address.City"
          required
          label="City"
          fullWidth
          component={TextField}
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <Field
          name="Applicant.Address.State"
          required
          label="State"
          fullWidth
          component={TextField}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Field
          name="Applicant.Address.PostalCode"
          required
          label="Postal Code"
          fullWidth
          component={TextField}
        />
      </Grid>
    </Grid>
  </Page>
);

export default WhereDoYouLive;

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import Page from '../components/NavPage';

const AllAboutYou = () => (
  <Page>
    <Grid container spacing={24}>
      <Grid item xs={12} sm={6}>
        <Field
          name="Applicant.FirstName"
          required
          label="First Name"
          fullWidth
          component={TextField}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          name="Applicant.LastName"
          required
          label="Last Name"
          fullWidth
          component={TextField}
        />
      </Grid>
    </Grid>
    <Grid container spacing={24}>
      <Grid item xs={12} sm={6}>
        <Field
          name="Applicant.Phone"
          required
          label="Phone Number"
          fullWidth
          type="tel"
          component={TextField}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          name="Applicant.Email"
          required
          label="Email Address"
          fullWidth
          type="email"
          component={TextField}
        />
      </Grid>
    </Grid>
  </Page>
);

export default AllAboutYou;

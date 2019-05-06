import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { PageController, Page, TransactForm } from '@transact-open-ux/react';
import { withStyles } from '@material-ui/core/styles';
import Header from './Header';
import Footer from './Footer';
import LandingPage from '../pages/LandingPage';
import AllAboutYou from '../pages/AllAboutYou';
import WhereDoYouLive from '../pages/WhereDoYouLive';
import DialogPortal from '../portals/DialogPortal';
import validationSchema from '../validationSchema';
import StepBar from './StepBar';
import NavBar from './NavBar';

const styles = theme => ({
  '@global': {
    'body, html': {
      fontFamily: 'Comfortaa, sans-serif',
      background: theme.mixins.gradient(theme.palette.secondary.main, theme.palette.primary.main),
      [theme.breakpoints.down('md')]: {
        background: theme.palette.primary.main,
        fontSize: theme.typography.mdFontSize,
      },
    },
  },
});

const CancelSuccess = React.lazy(() => import('../pages/CancelSuccess'));
const SubmitSuccess = React.lazy(() => import('../pages/SubmitSuccess'));
const SaveSuccess = React.lazy(() => import('../pages/SaveSuccess'));

const Loading = () => <div>loading...</div>;

const App = () => (
  <Fragment>
    <Header />
    <main>
      <StepBar appName="deposit account" />
      <TransactForm
        validationSchema={validationSchema}
        render={({ handleSubmit, isSubmitting }) => (
          <form noValidate="noValidate" onSubmit={handleSubmit}>
            <PageController>
              <Page id="LandingPage" offMenu>
                <LandingPage />
              </Page>
              <Page id="gettingstarted" label="all about you">
                <AllAboutYou />
              </Page>
              <Page id="wheredoyoulive" label="where do you live?">
                <WhereDoYouLive />
              </Page>
              <Page id="SubmitSuccess" offMenu loadingComponent={Loading}>
                <SubmitSuccess />
              </Page>
              <Page id="SaveSuccess" offMenu loadingComponent={Loading}>
                <SaveSuccess />
              </Page>
              <Page id="CancelSuccess" offMenu loadingComponent={Loading}>
                <CancelSuccess />
              </Page>
            </PageController>
            <NavBar isSubmitting={isSubmitting} />
            <DialogPortal />
          </form>
        )}
      />
    </main>
    <Footer />
  </Fragment>
);

App.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(App);

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { usePageContext, useTransactContext } from '@transact-open-ux/react';
import SubmitButton from './LoadingButton';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    background: '#FFFFFF',
    ...theme.mixins.container,
    ...theme.mixins.gutters(),
    paddingBottom: 15,
  },
  navBtn: {
    borderColor: theme.palette.secondary.main,
    color: theme.palette.secondary.main,
  },
  backBtn: {
    marginRight: 'auto',
    borderRadius: '100%',
    minWidth: 'auto',
    width: 50,
    height: 50,
    padding: 0,
  },
  rightBtn: {
    marginLeft: 'auto',
  },
});

const NavBar = ({ classes, isSubmitting }) => {
  const { isLoading, formSubmitted } = useTransactContext();
  const {
    navigate,
    currentPageMeta: { offMenu },
    disableSubmit,
    disableBack,
  } = usePageContext();

  return !offMenu ? (
    <div className={classes.root}>
      {!disableBack && (
        <Button
          aria-label="Navigate Back"
          onClick={() => navigate('back')}
          className={classNames(classes.backBtn, classes.navBtn)}
        >
          <ArrowBack />
        </Button>
      )}
      {disableSubmit ? (
        <Button
          onClick={() => navigate('forward')}
          className={classNames(classes.rightBtn, classes.navBtn)}
          color="primary"
        >
          Next
        </Button>
      ) : (
        <SubmitButton
          className={classes.rightBtn}
          disabled={isSubmitting || isLoading}
          loading={isLoading}
          success={formSubmitted}
          type="submit"
          color="primary"
        >
          Submit
        </SubmitButton>
      )}
    </div>
  ) : null;
};

NavBar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

export default withStyles(styles)(NavBar);

import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { usePageContext } from '@transact-open-ux/react';

const styles = theme => ({
  root: {
    ...theme.mixins.container,
    [theme.breakpoints.down('md')]: {
      background: theme.palette.secondary.contrastText,
      ...theme.mixins.gutters(),
    },
    paddingTop: 10,
  },
  rightAlign: {
    marginLeft: 'auto',
  },
  heading: {
    display: 'flex',
    color: theme.palette.secondary.contrastText,
    [theme.breakpoints.down('md')]: {
      color: theme.palette.secondary.main,
      fontSize: '1rem',
    },
  },
});

const StepBar = ({ classes, appName }) => {
  const {
    currentPageMeta: { stepNumber, label, offMenu },
  } = usePageContext();

  return !offMenu ? (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.heading}>
        {`step ${stepNumber}: ${label}`}
        <span className={classes.rightAlign}>{appName}</span>
      </Typography>
    </div>
  ) : null;
};

StepBar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  appName: PropTypes.string,
};

StepBar.defaultProps = {
  appName: null,
};

export default withStyles(styles)(StepBar);

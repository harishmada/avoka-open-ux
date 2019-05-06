import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    background: '#FFFFFF',
    minHeight: '40vh',
    padding: 15,
    ...theme.mixins.container,
  },
});

const NavPage = ({ classes, children, className }) => (
  <section className={classNames(classes.root, className)}>{children}</section>
);

NavPage.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

NavPage.defaultProps = {
  children: null,
  className: null,
};

export default withStyles(styles)(NavPage);

import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

/**
 * React component used as language provider.
 */
const ThemeProvider = ({ theme, children }) => {
  const muiTheme = createMuiTheme(theme);
  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

ThemeProvider.displayName = 'ThemeProvider';

ThemeProvider.propTypes = {
  theme: PropTypes.shape({}),
  children: PropTypes.element.isRequired,
};

ThemeProvider.defaultProps = {
  theme: {},
};

export default ThemeProvider;

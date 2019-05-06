import React from 'react';
import ReactDOM from 'react-dom';
import { PageProvider, TransactProvider } from '@transact-open-ux/react';
import ThemeProvider from '../js/providers/ThemeProvider';
import theme from '../js/theme';
import App from '../js/components/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <TransactProvider>
        <PageProvider>
          <App />
        </PageProvider>
      </TransactProvider>
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

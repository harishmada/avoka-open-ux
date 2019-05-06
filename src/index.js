import React from 'react';
import ReactDOM from 'react-dom';
import { TransactProvider, PageProvider } from '@transact-open-ux/react';
import App from './js/components/App';
import registerServiceWorker from './js/registerServiceWorker';
import { DialogProvider } from './js/providers/DialogProvider';
import ThemeProvider from './js/providers/ThemeProvider';
import theme from './js/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <TransactProvider>
      <DialogProvider>
        <PageProvider>
          <App />
        </PageProvider>
      </DialogProvider>
    </TransactProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();

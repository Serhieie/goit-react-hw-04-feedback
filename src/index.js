import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { ThemeProvider } from '@emotion/react';
import { rootsColors } from './constants';
import './index.css';

const root = document.getElementById('root');
const rootContainer = ReactDOM.createRoot(root);

rootContainer.render(
  <React.StrictMode>
    <ThemeProvider theme={{ rootsColors }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.js';
import './i18n.js';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

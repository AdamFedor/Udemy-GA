import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from './context/books';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

 // Provider shows up as prop of children
root.render(
    <Provider>
        <App />
    </Provider>
);
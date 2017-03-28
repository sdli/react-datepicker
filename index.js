import React, {Component} from 'react';
import ReactDOM,{ render } from 'react-dom';
import App from './datepicker';

const theme = {
    background: 'red'
};
const rootElement = document.getElementById('root');

render(
    <App theme={theme}>
    </App>,
    rootElement
);
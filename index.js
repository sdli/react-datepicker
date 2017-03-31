import React, {Component} from 'react';
import ReactDOM,{ render } from 'react-dom';
import App from 'react-datepicker-s';

const theme = {
    background: 'red'
};
const rootElement = document.getElementById('root');

render(
    <App theme={theme} open={true} getDate={(date)=>console.log(date)}>
    </App>,
    rootElement
);
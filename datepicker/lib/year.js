import React , { Component } from 'react';
import dayStyle from '../theme/day.js';
import ReactElementMouseHander from "../utils/common.js";

export default class Year extends Component{
    constructor(props){
        super(props);
        let transformInit = this.props.selected?(-((this.props.selected-1970)-2)*50):0;
        this.state = {
            scrollHeight: transformInit,
            transform: 'translateY(' + transformInit +'px)',
            initHeight: 0,
            selected: (props.selected-1970),
            minYear: -98*50,
            maxYear: 3*50,
            mouseOn: false
        };
        this.createList = this.createList.bind(this);
    }

    createList(){
        let tempArr = [];
        for(var x =0 ; x < 100; x++){
            tempArr.push(
                <li style={dayStyle.li} key={x}>{1970+x}</li>
            );
        }
        return tempArr;
    }

    render(){
        const styleUl = dayStyle.ul;
        const {transform} = this.state;
        const newStyle = { ...styleUl, transform};
        const yearList = this.createList();
        const handleEvents = ReactElementMouseHander(this,"Year");
        return(
            <div style={dayStyle.div} ref="datepicker_div" {...handleEvents}>
                <ul style={newStyle}>
                    {yearList.map((val) => val)}
                </ul>
                <div style={dayStyle.gradient}></div>
            </div>
        );
    }
}
import React , { Component } from 'react';
import dayStyle from '../theme/day.js';
import ReactElementMouseHander from "../utils/common.js";

export default class Day extends Component{
    constructor(props){
        super(props);
        let transformInit = this.props.selected?(-(this.props.selected-3)*50):0;
        this.state = {
            scrollHeight: transformInit,
            transform: 'translateY(' + transformInit +'px)',
            initHeight: 0,
            selected: props.selected,
            minDay: -(this.props.maxDay-2)*50,
            maxDay: 3*50,
            mouseOn: false
        };
        this.createList = this.createList.bind(this);
    }

    createList(num){
        let tempArr = [];
        for(var x =1 ; x < num+1; x++){
            tempArr.push(
                <li style={dayStyle.li} key={x}>{x}</li>
            );
        }
        return tempArr;
    }

    componentWillReceiveProps(nextProps){
        let transformInit = nextProps.selected?(-(nextProps.selected-3)*50):0;
        this.setState({
            scrollHeight: transformInit,
            transform: 'translateY(' + transformInit +'px)',
            initHeight: 0,
            selected: nextProps.selected,
            minDay: -(nextProps.maxDay-2)*50,
        });
    }

    render(){
        const styleUl = dayStyle.ul;
        const {transform} = this.state;
        const newStyle = { ...styleUl, transform};
        const handleEvents=ReactElementMouseHander(this,"Day");
        const dayList = this.createList(this.props.maxDay);
        return(
            <div style={dayStyle.div} ref="datepicker_div" {...handleEvents}>
                <ul style={newStyle}>
                   {dayList.map((val)=>val)}
                </ul>
                <div style={dayStyle.gradient}></div>
            </div>
        );
    }
}
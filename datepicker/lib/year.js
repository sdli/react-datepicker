import React , { Component } from 'react';
import dayStyle from '../theme/day.js';

export default class Year extends Component{
    constructor(props){
        super(props);
        let transformInit = this.props.selected?(-(this.props.selected-3)*50):0;
        this.state = {
            scrollHeight: transformInit,
            transform: 'translateY(' + transformInit +'px)',
            initHeight: 0,
            selected: props.selected,
            minYears: -2*50,
            maxYears: 3*50
        };
        this.ontouchstart = this.ontouchstart.bind(this)
        this.ontouchmove = this.ontouchmove.bind(this);
        this.ontouchend = this.ontouchend.bind(this);
    }

    ontouchstart(e){
        let initHeight = e.touches[0].pageY;
        this.setState({
            initHeight: initHeight
        });
    }

    ontouchmove(e){
        let touchHeight = e.touches[0].pageY;
        let height = touchHeight - this.state.initHeight;
        let recordHeight = this.state.scrollHeight+height;
        if(recordHeight > this.state.minYears && recordHeight < this.state.maxYears){
            this.setState({
                transform: 'translateY('+ recordHeight +'px)',
                scrollHeight: recordHeight,
                initHeight: touchHeight
            });
        }
    }

    ontouchend(e){
        let touchHeight = e.changedTouches[0].pageY;
        let glue = parseInt(this.state.scrollHeight/50);
        this.setState({
            transform: 'translateY(' + glue*50 + 'px)',
            scrollHeight : glue*50,
            initHeight: parseInt(this.state.initHeight) + parseInt(Math.round(this.state.scrollHeight/50*100)/100*50)
        });
    }

    render(){
        const styleUl = dayStyle.ul;
        const {transform} = this.state;
        const newStyle = { ...styleUl, transform};
        return(
            <div style={dayStyle.div} ref="datepicker_div" onTouchStart={this.ontouchstart} onTouchMove={this.ontouchmove} onTouchEnd={this.ontouchend}>
                <ul style={newStyle}>
                    <li style={dayStyle.li}>2015</li>
                    <li style={dayStyle.li}>2016</li>
                    <li style={dayStyle.li}>2017</li>
                    <li style={dayStyle.li}>2018</li>
                    <li style={dayStyle.li}>2019</li>
                    <li style={dayStyle.li}>2020</li>
                    <li style={dayStyle.li}>2021</li>
                </ul>
                <div style={dayStyle.gradient}></div>
            </div>
        );
    }
}
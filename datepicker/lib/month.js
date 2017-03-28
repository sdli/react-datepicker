import React , { Component } from 'react';
import dayStyle from '../theme/day.js';

export default class Month extends Component{
    constructor(props){
        super(props);
        let transformInit = this.props.selected?(-(this.props.selected-3)*50):0;
        this.state = {
            scrollHeight: transformInit,
            transform: 'translateY(' + transformInit +'px)',
            initHeight: 0,
            selected: props.selected,
            minMonths: -10*50,
            maxMonths: 3*50
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
        if(recordHeight > this.state.minMonths && recordHeight < this.state.maxMonths){
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
                    <li style={dayStyle.li}>1</li>
                    <li style={dayStyle.li}>2</li>
                    <li style={dayStyle.li}>3</li>
                    <li style={dayStyle.li}>4</li>
                    <li style={dayStyle.li}>5</li>
                    <li style={dayStyle.li}>6</li>
                    <li style={dayStyle.li}>7</li>
                    <li style={dayStyle.li}>8</li>
                    <li style={dayStyle.li}>8</li>
                    <li style={dayStyle.li}>10</li>
                    <li style={dayStyle.li}>11</li>
                    <li style={dayStyle.li}>12</li>
                </ul>
                <div style={dayStyle.gradient}></div>
            </div>
        );
    }
}
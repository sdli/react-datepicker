import React , { Component } from 'react';
import dayStyle from '../theme/day.js';

export default class Day extends Component{
    constructor(props){
        super(props);
        let transformInit = this.props.selected?(-(this.props.selected-3)*50):0;
        this.state = {
            scrollHeight: transformInit,
            transform: 'translateY(' + transformInit +'px)',
            initHeight: 0,
            selected: props.selected,
            minDays: -28*50,
            maxDays: 3*50,
            mouseOn: false
        };
        this.ontouchstart = this.ontouchstart.bind(this)
        this.ontouchmove = this.ontouchmove.bind(this);
        this.ontouchend = this.ontouchend.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
    }

    ontouchstart(e){
        let initHeight = e.touches[0].pageY;
        this.setState({
            initHeight: initHeight
        });
    }

    ontouchmove(e){
        e.preventDefault();
        let touchHeight = e.touches[0].pageY;
        let height = touchHeight - this.state.initHeight;
        let recordHeight = this.state.scrollHeight+height;
        if(recordHeight > this.state.minDays && recordHeight < this.state.maxDays){
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

    onMouseDown(e){
        let initHeight = e.pageY;
        this.setState({
            mouseOn: true,
            initHeight: initHeight
        });
    }

    onMouseMove(e){
        if(this.state.mouseOn){
            let touchHeight = e.pageY;
            let height = touchHeight - this.state.initHeight;
            let recordHeight = this.state.scrollHeight+height;
            if(recordHeight > this.state.minDays && recordHeight < this.state.maxDays){
                this.setState({
                    transform: 'translateY('+ recordHeight +'px)',
                    scrollHeight: recordHeight,
                    initHeight: touchHeight
                });
            }
        }
    }

    onMouseUp(e){
        if(this.state.mouseOn){
            let touchHeight = e.pageY;
            let glue = parseInt(this.state.scrollHeight/50);
            this.setState({
                transform: 'translateY(' + glue*50 + 'px)',
                scrollHeight : glue*50,
                initHeight: parseInt(this.state.initHeight) + parseInt(Math.round(this.state.scrollHeight/50*100)/100*50),
                mouseOn: false
            });
        }
    }

    onMouseLeave(e){
        if(this.state.mouseOn){
            let touchHeight = e.pageY;
            let glue = parseInt(this.state.scrollHeight/50);
            this.setState({
                transform: 'translateY(' + glue*50 + 'px)',
                scrollHeight : glue*50,
                initHeight: parseInt(this.state.initHeight) + parseInt(Math.round(this.state.scrollHeight/50*100)/100*50),
                mouseOn: false
            });
        }
    }

    onMouseOut(e){
        if(this.state.mouseOn){
            let touchHeight = e.pageY;
            let glue = parseInt(this.state.scrollHeight/50);
            this.setState({
                transform: 'translateY(' + glue*50 + 'px)',
                scrollHeight : glue*50,
                initHeight: parseInt(this.state.initHeight) + parseInt(Math.round(this.state.scrollHeight/50*100)/100*50),
                mouseOn: false
            });
        }
    }

    render(){
        const styleUl = dayStyle.ul;
        const {transform} = this.state;
        const newStyle = { ...styleUl, transform};
        const handleEvents={
            onTouchStart: this.ontouchstart,
            onTouchMove: this.ontouchmove,
            onTouchEnd: this.ontouchend,
            onMouseDown: this.onMouseDown,
            onMouseMove: this.onMouseMove,
            onMouseUp: this.onMouseUp,
            onMouseLeave: this.onMouseLeave,
            onMouseOut: this.onMouseOut
        };
        return(
            <div style={dayStyle.div} ref="datepicker_div" {...handleEvents}>
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
                    <li style={dayStyle.li}>13</li>
                    <li style={dayStyle.li}>14</li>
                    <li style={dayStyle.li}>15</li>
                    <li style={dayStyle.li}>16</li>
                    <li style={dayStyle.li}>17</li>
                    <li style={dayStyle.li}>18</li>
                    <li style={dayStyle.li}>19</li>
                    <li style={dayStyle.li}>20</li>
                    <li style={dayStyle.li}>21</li>
                    <li style={dayStyle.li}>22</li>
                    <li style={dayStyle.li}>23</li>
                    <li style={dayStyle.li}>24</li>
                    <li style={dayStyle.li}>25</li>
                    <li style={dayStyle.li}>26</li>
                    <li style={dayStyle.li}>27</li>
                    <li style={dayStyle.li}>28</li>
                    <li style={dayStyle.li}>29</li>
                    <li style={dayStyle.li}>30</li>
                </ul>
                <div style={dayStyle.gradient}></div>
            </div>
        );
    }
}
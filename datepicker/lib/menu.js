import React , { Component } from 'react';
import Day from './day';
import Month from './month';
import Year from './year';
import {theme ,mainStyle , maskStyle, menuStyle, menuHeaderStyle, menuFooterStyle, menuHeaderFirstStyle, menuHeaderLastStyle, menuFooterButtonStyle, menuContentStyle, menuLines, menuGradient} from '../theme/default.js';
// import reactTrans from '../../react-trans';

// reactTrans.init();

export default class Menu extends Component{
    constructor(props){
        super(props);
        this.theme = props.theme || {
            background: '#39A8BF'
        };
        const {selectedDate} = this.props;
        this.handleOpen = this.handleOpen.bind(this);
        this.initDate = this.initDate.bind(this);
        this.dayChange = this.dayChange.bind(this);
        this.monthChange = this.monthChange.bind(this);
        this.yearChange = this.yearChange.bind(this);
        this.getMaxDays = this.getMaxDays.bind(this);
        const initDateObj = this.initDate(props.selected);
        this.handleGetDate = this.handleGetDate.bind(this);
        this.state = {
            close: false,
            open: this.props.open,
            react_trans: true,
            selectedArr: initDateObj.list,
            maxDay: initDateObj.maxDay
        };
    }

    //handle the datePicker open/close
    handleOpen(){
        this.setState({
            close: true
        });
    }

    //check seleted date, if undefined, then choose new Date(),and incert them into  
    //the array to be returned.
    initDate(selected){
        if(typeof selected !== 'undefined' && selected !== null){
            let dateArr = selected.split('/');
            let d = new Date(dateArr[0], dateArr[1], 0);  
            return {
                list: dateArr,
                maxDay: d.getDate()
            };
        }else{
            let date= new Date();
            let getYear = date.getFullYear();
            let getMonth = date.getMonth() + 1;
            let getDay = date.getDate();
            let d = new Date(getYear, getMonth, 0);  
            return {
                list: [getYear,getMonth-1,getDay],
                maxDay: d.getDate()
            };
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.open){
            this.setState({
                close: false,
                open: nextProps.open
            });
        }else{
            this.setState({
                close: true,
                open: nextProps.open
            });
        }
    }
    
    componentDidUpdate(){
        // reactTrans.showElement(this.div);
    }

    componentDidMount(){
        // reactTrans.showElement(this.div);
    }

    dayChange(day){
        this.setState({
            selectedArr: [this.state.selectedArr[0],this.state.selectedArr[1],day]
        });
    }

    monthChange(month){
        if(month !== this.state.selectedArr[1]){
            const maxDay = this.getMaxDays(this.state.selectedArr[0],month);
            if(this.state.selectedArr[2]>maxDay){
                this.setState({
                    selectedArr: [this.state.selectedArr[0],this.state.selectedArr[1],maxDay],
                    maxDay: maxDay
                });
            }else{
                this.setState({
                    selectedArr: [this.state.selectedArr[0],month,this.state.selectedArr[2]],
                    maxDay: maxDay
                });
            }
        }
    }

    yearChange(year){
        if(year !== this.state.selectedArr[0]){
            const maxDay = this.getMaxDays(year,this.state.selectedArr[1]);
            if(this.state.selectedArr[2]>maxDay){
                this.setState({
                    selectedArr: [year,this.state.selectedArr[1],maxDay],
                    maxDay: maxDay
                });
            }else{
                this.setState({
                    selectedArr: [year,this.state.selectedArr[1],this.state.selectedArr[2]],
                    maxDay: maxDay
                });
            }
        }
    }

    getMaxDays(year,month){
        month = parseInt(month);
        let d= new Date(year,month,0);
        return d.getDate();
    }

    handleGetDate(){
        this.setState({
            close: true
        });
        if(this.props.getDate){
            this.props.getDate(this.state.selectedArr);
        }
    }

    render(){
        const theme = this.theme;
        if(!this.state.open || this.state.close) return null;
        return(
            <div style={mainStyle} ref={div => this.div = div}>
                <div style={maskStyle} onClick={this.handleOpen}></div>
                <div style={menuStyle}>
                    <div style={menuHeaderStyle}>
                        <p style={menuHeaderFirstStyle}>{this.state.selectedArr[0]}</p>
                        <p style={menuHeaderLastStyle}>{this.state.selectedArr[1]}月{this.state.selectedArr[2]}日</p>
                    </div>
                    <p style={menuLines}></p>
                    <div style={menuContentStyle}>
                        <Year selected={this.state.selectedArr[0]} yearChange={this.yearChange} />
                        <Month selected={this.state.selectedArr[1]} monthChange={this.monthChange} />
                        <Day selected={this.state.selectedArr[2]} dayChange={this.dayChange} maxDay={this.state.maxDay} />
                    </div>
                    <div style={menuFooterStyle}>
                        <p style={menuFooterButtonStyle} onClick={this.handleGetDate}>确定</p>
                    </div>
                </div>
            </div>
        );
    }
}
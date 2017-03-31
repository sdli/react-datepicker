import Menu from './datepicker/';
import React , { Component } from 'react';

export default class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
            date: []
        }
    }
    handleDatePicker(){
        this.setState({
            open: true
        });
    }

    render(){
        const style={
            position: 'absolute',
            top: '30%',
            left: '20%',
            width: '60%',
            height: '44px',
            borderRadius: '4px',
            lineHeight: '44px',
            margin: '0',
            padding: '0',
            textAlign: 'center',
            color: '#ffffff',
            border: '0',
            backgroundColor: 'green'
        };
        const style2={
            marginTop: '36px',
            textAlign: 'center'
        };
        return(
            <div>
                <Menu {...this.props} open={this.state.open} getDate={(date)=>this.setState({date:date,open: false})} />
                <button onClick={()=>this.handleDatePicker()} style={style} >开启日期选择</button>
                <h1 style={style2}>{this.state.date.toString()}</h1>
            </div>
        );
    }
}

import Menu from './lib/menu.js';
import React , { Component } from 'react';

export default class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleDatePicker(){
        this.setState({
            open: true
        });
    }
    render(){

        return(
            <div>
                <Menu {...this.props} open={this.state.open} />
                <button onClick={()=>this.handleDatePicker()} >开启日期选择</button>
            </div>
        );
    }
}

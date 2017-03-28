import React , { Component } from 'react';
import Day from './day';
import Month from './month';
import Year from './year';
import {theme ,mainStyle , maskStyle, menuStyle, menuHeaderStyle, menuFooterStyle, menuHeaderFirstStyle, menuHeaderLastStyle, menuFooterButtonStyle, menuContentStyle, menuLines, menuGradient} from '../theme/default.js';

export default class Menu extends Component{
    constructor(props){
        super(props);
        this.theme = props.theme || {
            background: '#39A8BF'
        };
        this.state = {
            close: false,
            open: this.props.open
        }
    }

    handleOpen(){
        this.setState({
            close: true
        });
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

    render(){
        const theme = this.theme;
        console.log('update');
        if(!this.state.open || this.state.close) return null;
        return(
            <div style={mainStyle} >
                <div style={maskStyle} onClick={()=>this.handleOpen()}></div>
                <div style={menuStyle}>
                    <div style={menuHeaderStyle}>
                        <p style={menuHeaderFirstStyle}>2016</p>
                        <p style={menuHeaderLastStyle}>10月25日</p>
                    </div>
                    <p style={menuLines}></p>
                    <div style={menuContentStyle}>
                        <Year />
                        <Month selected={3} />
                        <Day selected={15} />
                    </div>
                    <div style={menuFooterStyle}>
                        <p style={menuFooterButtonStyle}>确定</p>
                    </div>
                </div>
            </div>
        );
    }
}
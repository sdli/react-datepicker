function ReactElementMouseHander(element,type){
    return {
        onTouchStart: ontouchstart(element),
        onTouchMove: ontouchmove(element,type),
        onTouchEnd: ontouchend(element,type),
        onMouseDown: onMouseDown(element),
        onMouseMove: onMouseMove(element,type),
        onMouseUp: onMouseUp(element,type),
        onMouseLeave: onMouseLeave(element,type),
        onMouseOut: onMouseOut(element,type)
    };
}

function ontouchstart(element){
    var that = element;
    return function(e){
        let initHeight = e.touches[0].pageY;
        that.setState({
            initHeight: initHeight
        });
    }
}

function ontouchmove(element,type){
    var that = element;
    return function(e){
        e.preventDefault();
        let touchHeight = e.touches[0].pageY;
        let height = touchHeight - that.state.initHeight;
        let recordHeight = that.state.scrollHeight + height;
        if(recordHeight > that.state['min'+type] && recordHeight < that.state['max'+type]){
            that.setState({
                transform: 'translateY('+ recordHeight +'px)',
                scrollHeight: recordHeight,
                initHeight: touchHeight
            });
        }
    }
}

function ontouchend(element,type){
    var that = element;
    return function(e){
        let touchHeight = e.changedTouches[0].pageY;
        let glue = parseInt(that.state.scrollHeight/50);
        that.setState({
            transform: 'translateY(' + glue*50 + 'px)',
            scrollHeight : glue*50,
            initHeight: parseInt(that.state.initHeight) + parseInt(Math.round(that.state.scrollHeight/50*100)/100*50)
        });
        dateCallBack(that,type,glue);
    }
}

function dateCallBack(that,type,glue){
    switch (type){
        case "Year": that.props.yearChange(1972-glue);break;
        case "Month" : that.props.monthChange(3-glue);break;
        case "Day": that.props.dayChange(3-glue);break;
    }
}

function onMouseDown(element){
    var that = element;
    return function(e){
        let initHeight = e.pageY;
        that.setState({
            mouseOn: true,
            initHeight: initHeight
        });
    }
}

function onMouseMove(element,type){
    var that = element;
    return function(e){
        e.preventDefault();
        if(that.state.mouseOn){
            let touchHeight = e.pageY;
            let height = touchHeight - that.state.initHeight;
            let recordHeight = that.state.scrollHeight+height;
            if(recordHeight > that.state['min'+type] && recordHeight < that.state['max'+type]){
                that.setState({
                    transform: 'translateY('+ recordHeight +'px)',
                    scrollHeight: recordHeight,
                    initHeight: touchHeight
                });
            }
        }
    }
}

function onMouseUp(element,type){
    var that = element;
    return function(e){
        if(that.state.mouseOn){
            let touchHeight = e.pageY;
            let glue = parseInt(that.state.scrollHeight/50);
            that.setState({
                transform: 'translateY(' + glue*50 + 'px)',
                scrollHeight : glue*50,
                initHeight: parseInt(that.state.initHeight) + parseInt(Math.round(that.state.scrollHeight/50*100)/100*50),
                mouseOn: false
            });
            dateCallBack(that,type,glue);
        }
    }
}

function onMouseLeave(element,type){
    var that = element;
    return function(e){
        if(that.state.mouseOn){
            let touchHeight = e.pageY;
            let glue = parseInt(that.state.scrollHeight/50);
            that.setState({
                transform: 'translateY(' + glue*50 + 'px)',
                scrollHeight : glue*50,
                initHeight: parseInt(that.state.initHeight) + parseInt(Math.round(that.state.scrollHeight/50*100)/100*50),
                mouseOn: false
            });
            dateCallBack(that,type,glue);
        }  
    }
}

function onMouseOut(element,type){
    var that = element;
    return function(e){
        if(that.state.mouseOn){
            let touchHeight = e.pageY;
            let glue = parseInt(that.state.scrollHeight/50);
            that.setState({
                transform: 'translateY(' + glue*50 + 'px)',
                scrollHeight : glue*50,
                initHeight: parseInt(that.state.initHeight) + parseInt(Math.round(that.state.scrollHeight/50*100)/100*50),
                mouseOn: false
            });
            dateCallBack(that,type,glue);
        }
    }
}

export default ReactElementMouseHander;
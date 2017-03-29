const dayStyle ={
    ul:{
        listStyle: 'none',
        width: '100%',
        draggable: false
    },
    li:{
        height: '50px',
        textAlign: 'center',
        padding: '16px 0',
        fontSize: '14px',
        draggable: false
    },
    div:{
        flex: 1,
        position: 'relative',
        height: '256px',
        overflow: 'hidden',
        userSelect: 'none',
        cursor: 'pointer'
    },
    gradient:{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.7),rgba(255,255,255,0),rgba(255,255,255,0.7))'
    }
};

export default dayStyle;
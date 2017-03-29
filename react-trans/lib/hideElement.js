export default function(ref){
    let ele = ref;
    if(ele !== null && typeof ele !== 'undefined'){
        console.log(ele);
        if(ele.className.indexOf('react_trans_unhide') < 0 ){
            ele.className +=' react_trans_unshow';
            setTimeout(()=>{ele.className += ' react_trans_unhide';},100);
        }
        console.log(ele.className);
    }
}
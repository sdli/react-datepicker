export default function(ref){
    let ele = ref;
    if(ele !== null && typeof ele !== 'undefined'){
        if(ele.className.indexOf('react_trans_show') < 0 ){
            ele.className +=' react_trans_hide';
            setTimeout(()=>{ele.className += ' react_trans_show';},100);
        }
    }
}
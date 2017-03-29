export default function(ref){
    let ele = ref;
    if(ele !== null && typeof ele !== 'undefined'){
        console.log(ele);
        if(ele.className.indexOf('react_trans_show') < 0 ){
            ele.className +=' react_trans_hide';
            setTimeout(()=>{ele.className += ' react_trans_show';},100);
        }
        console.log(ele.className);
    }
}
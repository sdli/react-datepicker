import styles from './reactTransitionStylesheet';


/*
 *from style obj to stylesheet
 */
function OTS(obj){
    let style = '';
    for(let x in obj){
        style += '.'+x+'{'+obj[x]+'}';
    }
    return style;
}

/*
 *initiate styles
 */
const copyStyleToDocument = function(seconds){
    let styleElement = document.getElementById('react_style');

    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.type = 'text/css';
        styleElement.id = 'react_style';
        document.getElementsByTagName('head')[0].appendChild(styleElement);
        let second = '1s';
        let newStyle = OTS(styles)+ '*{transition: all '+ second + '}';
        styleElement.appendChild(document.createTextNode(newStyle))
    }
}

export default copyStyleToDocument;
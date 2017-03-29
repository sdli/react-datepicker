import copyStyleToDocument from './lib/reactTransition';
import showElement from "./lib/showElement";
import hideElement from "./lib/hideElement";

const reactTrans = {
    showElement: showElement,
    hideElement: hideElement,
    init: copyStyleToDocument
}

export default reactTrans;
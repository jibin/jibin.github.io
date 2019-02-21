import Constant from '../constant.js';

function nav() {
    
    if (Constant.HTML.classList.contains('main-navigation-open')) {
        Constant.HTML.classList.remove('main-navigation-open');
    } else {
        Constant.HTML.classList.add('main-navigation-open');
    }
}

export default nav;
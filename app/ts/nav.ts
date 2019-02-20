import constant from './constant.js';

function nav() {
    
    if (constant.HTML.classList.contains('main-navigation-open')) {
        constant.HTML.classList.remove('main-navigation-open');
    } else {
        constant.HTML.classList.add('main-navigation-open');
    }
}

export default nav;
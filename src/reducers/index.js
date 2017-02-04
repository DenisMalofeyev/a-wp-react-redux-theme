import {combineReducers} from 'redux';

import posts from './posts_reducer';
import menu from './menu_reducer';
import tax from './tax_reducer';

export default combineReducers({
    posts,
    menu,
    tax
});

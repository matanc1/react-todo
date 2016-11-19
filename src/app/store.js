/**
 * Created by matan on 18/11/2016.
 */

import {createStore} from 'redux'
import {todoApp} from './reducers.js'


const store = createStore(todoApp);

export {store};

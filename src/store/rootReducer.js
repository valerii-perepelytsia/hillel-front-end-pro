import {combineReducers} from "redux";

import {todos_app} from "./todos/reducer";

const rootReducer = combineReducers({
    todos_app,
});

export default rootReducer;
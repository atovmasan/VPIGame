import {combineReducers, createStore, applyMiddleware} from "redux"
import ContentReducer from "./ContentReducer"
import thunk from "redux-thunk"


let reducers = combineReducers({
    ContentReducer: ContentReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
export const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunk)));
window.__store__ = store;
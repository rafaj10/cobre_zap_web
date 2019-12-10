import {reducerPlayground} from '../Pages/Playground/playground.provide';
import {reducerContacts} from '../Pages/Contacts/contacts.providers';
import {reducerGroups} from '../Pages/Groups/groups.providers';

import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  playground:reducerPlayground,
  contacts:reducerContacts,
  groups:reducerGroups
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

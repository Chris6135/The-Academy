import {combineReducers} from 'redux';
import usersReducer from "./users_reducer";
import categoriesReducer from "./categories_reducer"

const entitiesReducer = combineReducers({
    users: usersReducer,
    categories: categoriesReducer
})

export default entitiesReducer;
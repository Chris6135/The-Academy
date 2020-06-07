import {combineReducers} from 'redux';
import usersReducer from "./users_reducer";
import categoriesReducer from "./categories_reducer"
import lessonsReducer from "./lessons_reducer"

const entitiesReducer = combineReducers({
    users: usersReducer,
    lessons: lessonsReducer,
    categories: categoriesReducer
})

export default entitiesReducer;
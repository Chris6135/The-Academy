import {RECEIVE_CATEGORIES} from "../actions/lessons/lesson_actions"


const categoriesReducer = (state ={}, action) => {
    Object.freeze (state)
    switch(action.type){
        case RECEIVE_CATEGORIES:
            debugger
            // const categories = {}
            // console.log(action)
            // const titles = action.categories.titles.values
            //  titles.forEach((category) =>
            //   categories[category.id] = action.category
            //   )
              return Object.assign({},action.categories);
        default:
            return state
    }
}

export default categoriesReducer
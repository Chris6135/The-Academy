
export const getCategories= ()=>{
    return $.ajax({
        url:"/api/categories",
    })
};

export const getLessonsByCategory = () =>{
    return $.ajax({
        url:"/api/categories/:id",
    })

};

export const categoryIdArr = (object) =>{
    console.log(object)
    console.log(object.keys)
   return object.keys
}
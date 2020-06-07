
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



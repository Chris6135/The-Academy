export const getUserLessons = (user_id) =>{
    return $.ajax({
        url:`/api/${user_id}/lessons`,
        method:"GET",
    })

};

export const getAllLessons = () =>{
    return $.ajax({
        url:`/api/lessons`,
        method:"GET",
    })

};

export const getSingleLesson = (id) =>{
    return $.ajax({
        url:`/api/lessons/${id}`,
        method:"GET",
    })

};

export const deleteLesson = (id) =>{
    return $.ajax({
        url:`/api/lessons/${id}`,
        method:"DELETE",
    })

};

export const createLesson = (lesson) =>{
    return $.ajax({
        url:`/api/lessons`,
        method:"POST",
        data:{lesson}
    })

};

export const updateLesson = (lesson) =>{
    return $.ajax({
        url:`/api/lessons/${lesson.id}`,
        method:"POST",
        data:{lesson}
    })

};
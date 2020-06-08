export const getLessonSteps = (lesson_id) =>{
    return $.ajax({
        url:`/api/lessons/${lesson_id}/steps`,
        method:"GET",
    })

};

export const getSingleStep = (id) =>{
    return $.ajax({
        url:`/api/step/${id}`,
        method:"GET",
    })

};

export const deleteStep = (id) =>{
    return $.ajax({
        url:`/api/step/${id}`,
        method:"DELETE",
    })

};

export const createStep = (step) =>{
    return $.ajax({
        url:`/api/steps`,
        method:"POST",
        data:{step}
    })

};

export const updateStep = (step) =>{
    return $.ajax({
        url:`/api/steps/${step.id}`,
        method:"POST",
        data:{step}
    })

};
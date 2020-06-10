export const getUserInfo = (id) =>{
    return $.ajax({
        url:`/api/users/${id}`,
        method:"GET",
    })

};

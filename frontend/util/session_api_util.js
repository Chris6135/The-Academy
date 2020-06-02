
export const signUp= (user)=>{
    return $.ajax({
        url:"/api/user",
        method: "POST",
        data: {user}
    })
};

export const signIn = (user) =>{
    return $.ajax({
        url:"/api/session",
        method:"POST",
        data: {user}
    })

};

export const signOut= ()=>{
    return $.ajax({
        url:"/api/session",
        method:"DELETE"
    })

};


export const sendUser = (user)=>{
    return {type:"SEND_USER",user}
}

export const sendFullUser = (user,id)=>{
    return {type:"SEND_FULL_USER",user,id}
}
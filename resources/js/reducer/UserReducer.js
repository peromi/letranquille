const UserReducer =(state, action)=>{
    switch(action.type){
        case "ADD":
            return {
                user:action.payload.user,
                profile:action.payload.profile,
                avatar:action.payload.avatar,
                token: action.payload.token
            };
        default:
            return state;
    }
}

export default UserReducer;

import { inisialstate } from "./Inisialstate"
import {  actionType } from "./Typeaction"



const UserAuthReduser =(state=inisialstate,{type,payload})=>{

 switch (type) {
    case actionType.SET_USER:
        return{
            ...state,
            user:payload
        }
        

 
    default:
        return state
 }
}


export default UserAuthReduser;
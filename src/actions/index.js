import {Add_reminder,Remove_reminder,Clear_reminder} from "../types"


export const add_reminder=(text,date)=>{
   const action={
       type:Add_reminder,
       text,
       date


   }

   return action
}
export const remove_reminder=(id)=>{
const action={
    type:Remove_reminder,
    id

}
console.log('remove',action)
return action


}



export const clear_reminder=()=>{
    const action={
        type:Clear_reminder,
        
    
    }
    console.log('clear',action)
    return action
    
    
    }
import {Add_reminder,Remove_reminder,Clear_reminder} from '../types'
import {bake_cookie,read_cookie} from 'sfcookies'


const reminder=(state=[],action)=>{
let reminder=[]
state=read_cookie('reminder')
if (action.type===Add_reminder){
    reminder=[...state,{ text:action.text,date:action.date,id:Math.random()}]
    bake_cookie('reminder',reminder)
    
    return reminder
}
else if(action.type===Remove_reminder){
reminder=state.filter(reminder=>reminder.id != action.id)
bake_cookie('reminder',reminder)
return reminder

}else if(action.type===Clear_reminder){
    reminder=[]
    bake_cookie('reminder',reminder)
    return reminder
}    

else{
    return state
}



}
export default reminder

import React, { Component } from 'react'
import "./app.css"
import {connect} from 'react-redux'
import moment from 'moment'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {add_reminder,remove_reminder,clear_reminder}from '../actions'

class App extends Component {
state={
    text:'',
    date:new Date()
}

renderReminders=()=>{
  const  remind=this.props.remind

  return(
<ul>
{
  remind.map(reminder=>{
return(
<li key={reminder.id} className="bottonBorder">
  
<div className="white">{reminder.text}<span className=" remove btn btn-danger" onClick={()=>{this.props.remove_reminder(reminder.id)}}>X</span></div>

<div className="white ">{moment(new Date(reminder.date)).fromNow()}</div>


</li>
)
  })
}
</ul>
  )
}





    render() {




        return (
        <div className="app">
            <img src=" "/>
            <div className="title"><h2 className="title"> what should i do</h2> </div>
            <input
            onChange={(e)=>this.setState({text:e.target.value})}
            className="form-control"type="text" placeholder="enter reminder" value={this.state.text}/>
            {/* <input
            onChange={(e)=>this.setState({date:e.target.value})}
            className="form-control" type="datetime-local" placeholder="enter date"value={this.state.text} /> */}
            <DatePicker
      selected={this.state.date}
      className="form-control"
      value={this.state.date} 
      onChange={(date) => {this.setState({date:date})}}
      placeholderText="enter date"
      showTimeSelect
      
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
    />
            <button
            onClick={()=>{this.props.add_reminder(this.state.text,this.state.date)
            this.setState({
              text:"",  date:"" })
            }}
            className="btn btn-success btn-block"
            >add reminder</button>
            {this.renderReminders()}
            <button 
             onClick={()=>this.props.clear_reminder()}
            className="btn btn-danger btn-block">clear reminder</button>

        </div>



        )
    }
}
// function mapDispatchToProps(dispatch){
//     return{
//         add_reminder:()=>dispatch(add_reminder())
// }
// }
export default connect ((state)=>{
    return{
     remind: state

    }
},{
    add_reminder,

    remove_reminder,
    clear_reminder
})(App)

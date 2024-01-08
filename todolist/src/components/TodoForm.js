//import React,{Component} from 'react'


//class todoForm extends Component {
//	  constructor(props) {
//		    super(props);
//		    this.state = {
//		      inputTask:" "
//		    };
//				//this.handleChange = this.handleChange.bind(this); //for re rendering prevention and binding methods
//				//this.handleSubmit = this.handleSubmit.bind(this);
//				// we use bind when we are simply calling function in onChange 
//				// to avoid this bind we can use arrow function either in function directly or inside onChange when calling for that function
//		  }
//			handleChange=(event)=> {
				
//				this.setState=({inputTask: event.target.value})
//				console.log("eventttt ", event.target.value);
//				console.log("array ",this.state.inputTask)
//			}
			
//			handleSubmit=(event)=>{
//				alert('A task was submitted: ' + this.state.inputTask);
//				event.preventDefault();
				
//			}
	
//	render() {
//		return (
//			<div>
//				<form onSubmit = {this.handleSubmit}>
//						<input placeholder="Add your task for today" type="text" value={this.state.inputTask} onChange={this.handleChange} name="name"/>
//			     <button type="submit">Add Task</button>
//				</form>
// 			</div>

//		);
//	}
//}

//export default todoForm;


import React, {useState}  from 'react'

export default function TodoForm({AddTask}) {
	const [inputTask, addValue]= useState("");
	
	let handleSubmit=(event)=>{
			event.preventDefault();		
			console.log("first", inputTask)
			
			AddTask(inputTask);
			console.log("secondddd")
			addValue("");	
		
		}
	return (
		<div className='todoform'>	
			<form onSubmit = {handleSubmit}>
						<input placeholder="Add your task for today" type="text" value={inputTask} onChange={(e)=>addValue(e.target.value)} className="todo-input"/>
			     <button className="todo-button" type="submit">Add Task</button>
					 <div>
						
					 </div>
			</form>
			
		</div>
	)
}

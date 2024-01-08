//import React,{useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function todopoints({task,DeleteTask}) {  //,EditTask
	//const [todotask,settodo]=useState("");
	console.log("taskkkk id ",task );
	return (
		<div className='todopoints'>
			<div>{task.task}</div> 
			<div className='icon'>
		
			{/*<FontAwesomeIcon className='edit' icon={faPenToSquare} onClick={()=>EditTask(task.id)} />*/}
      <FontAwesomeIcon className='delete' icon={faTrash} onClick={()=>DeleteTask(task._id)} />
			
			</div>
		
			
		</div>
	)
}

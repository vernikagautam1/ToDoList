import React, {useState, useEffect} from 'react'
import TodoForm from './TodoForm'
import Todopoints from './todopoints';
//import EditTask from './editTask';
//import { v4 as uuidv4 } from "uuid";
import APIHelper from "../ApiHelper.js"


export default function TodoHtml() {
	const [todos, setTodos] = useState([]);

  console.log("todoss ",todos)
	  useEffect(() => {
    async function fetchData() {
      try {
        const data = await APIHelper.getAllTodos();
        setTodos(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);


let AddTask = async (todo) => {
	console.log("todooo in add task", todo)
  if (todo) {
    try {
      const newTask = await APIHelper.AddTask(todo);
      setTodos([...todos, newTask]);
			console.log("adding task newtask ",newTask)
    } catch (error) {
      console.error("Error adding task:", error);
    }
  }
};
	
	const deletetask = async (id) => { 
		    try {
		      await APIHelper.deletetask(id); //backend work
					
		      setTodos(todos.filter((todo) => todo._id !== id)); //frontend work
		    } catch (error) {
		      console.error('Error deleting task:', error);
		    }
		  };
	//let EditTask=(id,newValue)=>{
	//	setTask(prev =>prev.map(item=>(item.id === id ? newValue: item)))
	//}
	return (
		<div className='todoHtml'>
			<TodoForm AddTask={AddTask}/>
			{todos.map((todop)=>(
					 <Todopoints key={todop._id}
					             task={todop}
											 DeleteTask={deletetask}
											// EditTask={EditTask}
					 />
			))}
		 
		</div>
	)
}

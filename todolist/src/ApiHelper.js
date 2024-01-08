import axios from 'axios';

const API_URL = 'http://localhost:3000/api/tasks/';

async function AddTask(task) {
  const { data: newTodo } = await axios.post(API_URL + 'addingdata', {
    task,
  });
  return newTodo;
}

async function deletetask(id) {
  const message = await axios.delete(API_URL + id);
  return message.data;
}

async function getAllTodos() {
  const { data: todos } = await axios.get(API_URL + 'gettingdata');
  return todos;
}
const ApiHelper = { AddTask, deletetask, getAllTodos };

export default ApiHelper;

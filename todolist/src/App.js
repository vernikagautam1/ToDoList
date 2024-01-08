import './App.css';
import Headers from './components/header.js';
//import TodoForm from './components/TodoForm';
import TodoHtml from './components/TodoHtml.js';

function App() {
  return (
    <div className='app'>
    <Headers/>
		<TodoHtml/>
		{/*<TodoForm/>*/}
    </div>
  );
}

export default App;

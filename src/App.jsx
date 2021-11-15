import {TodoCounter} from './components/TodoCounter';
import {TodoSearch} from './components/TodoSearch';
import {TodoList} from './components/TodoList';
import {TodoItem} from './components/TodoItem';
import './App.css';

const todos = [
	{text: 'Cortar cebolla', completed: true},
	{text: 'Tomar el cursso de intro a React', completed: false},
	{text: 'Llorar con la llorona', completed: false},
	{text: 'LALALALAA', completed: false},
];

function App() {
	return (
		<>
			<TodoCounter />
			<TodoSearch />
			<TodoList>
				{todos.map((todo) => (
					<TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
				))}
			</TodoList>
			{/* <CreateTodoButton/> */}
		</>
	);
}

export default App;

import React, {useState, useEffect} from 'react';
import {TodoCounter} from './components/TodoCounter';
import {TodoSearch} from './components/TodoSearch';
import {TodoList} from './components/TodoList';
import {TodoItem} from './components/TodoItem';
import {CreateTodoButton} from './components/CreateTodoButton';
import {Modal} from './components/Modal';
import {TodoForm} from './components/TodoForm';

import {useLocalStorage} from './hooks/useLocalStorage';
import './App.css';

const App = () => {
	const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
	const [openModal, setOpenModal] = useState(false);
	const [searchText, setSearchText] = useState('');
	const filteredTodos = todos.filter((todo) => {
		const todoText = todo.text.toLowerCase();
		const search = searchText.toLowerCase();
		if (search.length === 0) return todo;
		return todoText.includes(search);
	});
	const addTodo = (todo) => {
		saveTodos([...todos, todo]);
	};
	const toggleCompleteTodo = (text) => {
		const todoIndex = todos.findIndex((todo) => todo.text === text);
		const newTodos = [...todos];
		newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
		saveTodos(newTodos);
	};
	const deleteTodo = (text) => {
		const todoIndex = todos.findIndex((todo) => todo.text === text);
		const newTodos = [...todos];
		newTodos.splice(todoIndex, 1);
		saveTodos(newTodos);
	};

	return (
		<>
			<TodoCounter todos={todos} />
			<TodoSearch searchText={searchText} setSearchText={setSearchText} />
			<TodoList>
				{error && <p>Error .... </p>}
				{loading && <p>Loading .... </p>}
				{!loading && filteredTodos.length === 0 && <p>Crea tu primer Todo</p>}

				{filteredTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => toggleCompleteTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>
			{openModal && (
				<Modal setOpenModal={setOpenModal}>
					<TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
				</Modal>
			)}
			<CreateTodoButton setOpenModal={setOpenModal} />
		</>
	);
};

export default App;

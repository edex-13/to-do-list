import React from 'react';
import '../styles/TodoCounter.css';

const TodoCounter = ({todos}) => {
	const todoCount = todos.length;
	const completedCount = todos.filter(({completed}) => completed).length;
	return <h2 className="TodoCounter">Has completado {completedCount} de {todoCount} TODOs</h2>;
};

export {TodoCounter};

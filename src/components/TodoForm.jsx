import React, {useState} from 'react';
import '../styles/TodoForm.css';


const TodoForm = ({addTodo, setOpenModal}) => {
	const [text, setText] = useState('');
	const onCancel = () => {
		setText('');
		setOpenModal(false);
	};
	const onChange = (e) => {
		setText(e.target.value);
	};
	const onSubmit = (event) => {
		event.preventDefault();
		addTodo({
			text: text,
			completed: false,
		});
		onCancel();
	};
	return (
		<form onSubmit={onSubmit}>
			<label>Escribe tu nuevo TODO</label>
			<textarea value={text} onChange={onChange} placeholder="Hacer tareas :)"  required/>
			<div className="TodoForm-buttonContainer">
				<button type="button" className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>
					Cancelar
				</button>
				<button type="submit" className="TodoForm-button TodoForm-button--add">
					Añadir
				</button>
			</div>
		</form>
	);
};

export {TodoForm};

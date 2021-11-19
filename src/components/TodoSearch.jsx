import React from 'react';
import '../styles/TodoSearch.css';

const TodoSearch = ({searchText,setSearchText}) => {
	const onSearch = (event) => {
		setSearchText(event.target.value);
	};
	return <input value={searchText} className="TodoSearch" placeholder="Buscar ..." onChange={onSearch} />;
};

export {TodoSearch};

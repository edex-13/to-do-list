import React from 'react';

import '../styles/TodoList.css';

const TodoList = ({children}) => {
	return (
		<section>
			<ul>
				{children}
			</ul>
		</section>
	);
};

export {TodoList};

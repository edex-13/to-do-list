import {useState, useEffect} from 'react';
const useLocalStorage = (key, initialValue) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [item, setItem] = useState(initialValue);

	useEffect(() => {
		setTimeout(() => {
			try {
				const localStorageItem = localStorage.getItem(key);
				console.log(localStorage.getItem(key));
				let parsed = [];
				if (localStorageItem) {
					parsed = JSON.parse(localStorageItem);
				} else {
					parsed = localStorage.setItem(key, JSON.stringify(initialValue));
				}
				setItem(parsed);
				setLoading(false);
			} catch (error) {
				setError(true);
			}
		}, 1000);
	}, []);

	const saveItem = (newItem) => {
		const stringifiedItem = JSON.stringify(newItem);
		localStorage.setItem(key, stringifiedItem);
		setItem(newItem);
	};
	return {item, saveItem, loading, error};
};

export {useLocalStorage};

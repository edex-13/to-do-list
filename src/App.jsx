import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import './App.css';

function App() {
  return (
    <>
      <TodoCounter/>
      <TodoSearch/>
      {/* <TodoList>
        <TodoItem/>
        <TodoItem/>
       </TodoList>
       <CreateTodoButton/> */}
    </>
  );
}

export default App;

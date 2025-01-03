import { useEffect, useState } from 'react'
import './App.css'
import { ITodoItem } from './types'
import Form from './components/Form/Form';
import AllToDosList from './components/All-todos/AllToDosList';
import returnMonthName from './utils/Monthes';
import Dashboard from './components/Dashboard/Dashboard';
import useLocalStorage from './hooks/useLocalStorage';
const date = new Date();
const localeFormattedDate: string = date.toLocaleDateString('en-US');
const day = localeFormattedDate.split("/")[1];
const month: string = returnMonthName(date.getMonth());
function App() {
  const [todos, setTodos] = useState<ITodoItem[]>([]);

  const {storedData} = useLocalStorage(todos, "todos-list");

  useEffect(() => {
    const newTodos = storedData || [];
    setTodos(newTodos);
  }, [storedData])

  const handleNewItem = (newItem: ITodoItem) => {
    setTodos([...todos, newItem]);
  };

  const handleDelete = (pos: number) => {
    const newToDos = todos.filter((_, index) => index !== pos);
    setTodos(newToDos);
  };

  const setDone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const doneId = e.target.dataset["id"];
    const checked = e.currentTarget.checked;
    const newTodos = todos.map(item => item.id == Number(doneId) ? {...item, isDone: checked} : item);
    setTodos(newTodos);
  }

  return (
    <div className='to-do-app'>
      <h3>Date: {month}, {day}</h3>
      <h1>To Do App</h1>
      <Form passNewItem={handleNewItem}/>
      <Dashboard items={todos}/>
      <AllToDosList 
        items={todos}
        handleDelete={handleDelete}
        handleComplete={setDone}
        />
    </div>
  )
}

export default App

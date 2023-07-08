import React from 'react';
import { useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';
import SideIcons from './components/SideIcons';
import './App.css';
import './styles/TodoForm.css'
import './styles/Todo.css'
import './styles/Filter.css'
import './styles/Search.css'
import './styles/SideIcons.css'

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filterTodos = newTodos.filter((todo) => todo.id !== id ? todo : null);
    setTodos(filterTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <SideIcons></SideIcons>
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch}></Search>
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}></Filter>
      <div className='to-do-list'>
        {todos.filter((todo) => filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted).filter((todo) => todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())).sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)).map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}></Todo>
        ))}
      </div>
      <TodoForm addTodo={addTodo}></TodoForm>
    </div>
  );
}

export default App;

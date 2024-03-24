import { Form, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const toDosData = localStorage.getItem("toDos");
    const toDosParse = JSON.parse(toDosData);
    return toDosParse ?? []; 
  });

  useEffect(() => { 
  localStorage.setItem("toDos", JSON.stringify(todos))
  }, [todos]);

  const onHandleSubmit = event => {
    event.preventDefault();
    const todoText = event.target.search.value;
    if (!todoText) return;
    const toDo = {
      text: todoText,
      id: nanoid(),
    };
    setTodos([...todos, toDo]);

    event.target.reset();
  };

  const deleteToDo = (id) => {
    setTodos(todos.filter(el => el.id !== id));
  }

  // return <Text textAlign="center">There are no any todos ...</Text>;
  return (
    <>
      <Form onSubmit={onHandleSubmit} />
      <TodoList deleteToDo={deleteToDo} todos={todos} />
    </>
  );
};

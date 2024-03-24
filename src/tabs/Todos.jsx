import { Form, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

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

  // return <Text textAlign="center">There are no any todos ...</Text>;
  return (
    <>
      <Form onSubmit={onHandleSubmit} />
      <TodoList todos={todos} />
    </>
  );
};

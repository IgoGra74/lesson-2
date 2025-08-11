import { EditForm, Form, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const toDosData = localStorage.getItem('toDos');
    const toDosParse = JSON.parse(toDosData);
    return toDosParse ?? [];
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  useEffect(() => {
    localStorage.setItem('toDos', JSON.stringify(todos));
  }, [todos]);

  const onHandleSubmit = event => {
    event.preventDefault();
    const todoText = event.target.search.value;
    if (!todoText) return;
    const todo = {
      text: todoText,
      id: nanoid(),
    };
    setTodos([...todos, todo]);

    event.target.reset();
  };

  const deleteToDo = id => {
    setTodos(todos.filter(el => el.id !== id));
  };
  const handleEditTodo = todo => {
    setIsEditing(true);
    setCurrentTodo(todo);
  };
  const cancelUpdate = () => {
    setIsEditing(false);
    setCurrentTodo({});
  };
  const findTodo = text => {
    return todos.find(todo => todo.text.toLowerCase() === text.toLowerCase());
  };
  const updateTodo = text => {
    if (!text.trim()) return;
    if (findTodo(text)) {
      alert('Таке todo вже існує!');
      return;
    }

    setTodos(
      todos.map(todo =>
        todo.id === currentTodo.id ? { ...todo, text } : todo,
      ),
    );
    setIsEditing(false);
    setCurrentTodo({});
  };

  // return <Text textAlign="center">There are no any todos ...</Text>;
  return (
    <>
      {isEditing ? (
        <EditForm
          updateTodo={updateTodo}
          cancelUpdate={cancelUpdate}
          defaultValue={currentTodo.text ?? ''}
        />
      ) : (
        <Form onSubmit={onHandleSubmit} />
      )}

      <TodoList
        deleteToDo={deleteToDo}
        todos={todos}
        handleEditTodo={handleEditTodo}
      />
    </>
  );
};

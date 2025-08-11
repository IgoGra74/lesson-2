import { Grid, GridItem, TodoListItem } from '..';

export const TodoList = ({ todos, deleteToDo, handleEditTodo }) => {
  return (
    <Grid>
      {todos.map((todo, index) => (
        <GridItem key={todo.id}>
          <TodoListItem
            deleteToDo={deleteToDo}
            todo={todo}
            index={index + 1}
            handleEditTodo={handleEditTodo}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

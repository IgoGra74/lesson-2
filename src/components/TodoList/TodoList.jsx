import { Grid, GridItem, TodoListItem } from '..';

export const TodoList = ({ todos, deleteToDo }) => {
  return (
    <Grid>
      {todos.map((toDo, index) => (
        <GridItem key={toDo.id}>
          <TodoListItem deleteToDo={deleteToDo} toDo={toDo} index={index + 1} />
        </GridItem>
      ))}
    </Grid>
  );
};

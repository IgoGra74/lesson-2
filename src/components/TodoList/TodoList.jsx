import { Grid, GridItem, TodoListItem } from '..';

export const TodoList = ({ todos }) => {
  return (
    <Grid>
      {todos.map((toDo, index) => (
        <GridItem key={toDo.id}>
          <TodoListItem toDo={toDo} index={index + 1} />
        </GridItem>
      ))}
    </Grid>
  );
};

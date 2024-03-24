import { Text } from '..';
import style from './TodoListItem.module.css';
import { RiDeleteBinLine } from 'react-icons/ri';

export const TodoListItem = ({ deleteToDo ,toDo, index }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{index}
      </Text>
      <Text>{toDo.text}</Text>
      <button className={style.deleteButton} type="button" onClick={()=> deleteToDo(toDo.id)}>
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TodoItem from '../TodoItem';
import { completeTodos, removeTodos, updateTodos } from 'redux/reducer';

import s from './index.module.scss';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [unCompletedTasks, setUnCompletedTasks] = useState([]);

  useEffect(() => {
    const newCompletedTask = [];
    const newUnCompletedTask = [];

    todos.map((task) =>
      task?.completed ? newCompletedTask.push(task) : newUnCompletedTask.push(task)
    );

    setCompletedTasks(newCompletedTask);
    setUnCompletedTasks(newUnCompletedTask);
  }, [todos]);

  const handleCompleteItem = ({ id, completed }) => dispatch(completeTodos({ id, completed }));
  const handleRemoveItem = (id) => dispatch(removeTodos(id));
  const handleUpdateItem = ({ id, title, description }) =>
    dispatch(updateTodos({ id, title, description }));

  return (
    <div className={s.container}>
      <div className={s.content}>
        {unCompletedTasks.map((todo) => (
          <TodoItem
            key={todo.id}
            item={todo}
            onUpdate={handleUpdateItem}
            onComplete={handleCompleteItem}
            onRemove={handleRemoveItem}
          />
        ))}
      </div>

      <div className={s.separator} />

      <div className={s.content}>
        {completedTasks.map((todo) => (
          <TodoItem
            key={todo.id}
            item={todo}
            onUpdate={handleUpdateItem}
            onComplete={handleCompleteItem}
            onRemove={handleRemoveItem}
          />
        ))}
      </div>
    </div>
  );
};
export default TodoList;

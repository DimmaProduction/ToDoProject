import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodos } from 'redux/reducer';

import { ReactComponent as AddIcon } from '../../../../assets/add.svg';

import s from './index.module.scss';

const initialState = '';

const NewTodoBlock = () => {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState(initialState);

  const handleInputTaskName = (e) => setTaskName(e.target.value);

  const handleAddTodo = () => {
    dispatch(addTodos(taskName));
    setTaskName(initialState);
  };

  return (
    <div className={s.newTodo__wrapper}>
      <input
        type="text"
        placeholder="What needs to be done?"
        className={s.newTodo__input}
        value={taskName}
        onChange={handleInputTaskName}
      />
      <AddIcon
        className={`${s.newTodo__button} ${!taskName.length && s.newTodo__button_disabled}`}
        onClick={handleAddTodo}
      />
    </div>
  );
};

export default NewTodoBlock;

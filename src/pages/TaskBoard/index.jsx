import React from 'react';
import s from './index.module.scss';
import NewTodoBlock from './components/NewTodoBlock';
import ToDoList from './components/TodoList';
import TodoList from './components/TodoList';

const TaskBoard = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        {/* <h1>HeLLO WORLD</h1> */}
        <NewTodoBlock />
        <TodoList />
      </div>
    </div>
  );
};

export default TaskBoard;

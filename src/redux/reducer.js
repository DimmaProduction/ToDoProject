import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Initail descriptions of task. it should be some default text about the task',
    completed: false
  },
  {
    id: '2',
    title: 'Initial task 2',
    description: 'Initail descriptions of task. it should be some default text about the task',
    completed: true
  },
  {
    id: '4',
    title: 'Initial task 3',
    description: 'Initail descriptions of task. it should be some default text about the task',
    completed: true
  },
  {
    id: '5',
    title: 'Initial task 4',
    description: 'Initail descriptions of task. it should be some default text about the task',
    completed: false
  },
  {
    id: '6',
    title: 'Initial task 5',
    description: 'Initail descriptions of task. it should be some default text about the task',
    completed: false
  },
  {
    id: '7',
    title: 'Initial task 6',
    description: 'Initail descriptions of task. it should be some default text about the task',
    completed: false
  }
];

const addTodoReducer = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    //Adding todos
    addTodos: (state, action) => {
      const newTodo = { id: uuidv4(), title: action.payload, description: null, completed: false };
      state.unshift(newTodo);
      return state;
    },
    //remove todos
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    //update todos
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title,
            description: action.payload.description
          };
        }
        return todo;
      });
    },
    //complete/uncomplete todos
    completeTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: action.payload.completed
          };
        }
        return todo;
      });
    }
  }
});

export const { addTodos, removeTodos, updateTodos, completeTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;

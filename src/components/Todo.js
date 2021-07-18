import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardActions } from '@material-ui/core';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <Card
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <CardContent key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </CardContent>
      <CardActions>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </CardActions>
    </Card>
  ));
};

export default Todo;

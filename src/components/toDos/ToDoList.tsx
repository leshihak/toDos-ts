import React from 'react';
import { Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

interface ToDo {
  done: boolean;
  id: string;
  important: boolean;
  name: string;
  description: string | null;
}

interface Props {
  deleteToDo: (id: string) => void;
  getImportantToDo: (id: string, showImportant: boolean) => void;
  doneToDo: (id: string, done: boolean) => void;
  toDos: ToDo[];
}

export const ToDoList = ({
  toDos,
  deleteToDo,
  getImportantToDo,
  doneToDo,
}: Props) => {
  const renderToDos = () => {
    return toDos.map((toDo: ToDo) => {
      return (
        <div className='toDo' key={uuidv4()}>
          {toDo.done ? (
            <input
              type='checkbox'
              name=''
              className='checkbox'
              defaultChecked
              onClick={() => handleDoneToDo(toDo.id, false)}
            />
          ) : (
            <input
              type='checkbox'
              name=''
              className='checkbox'
              onClick={() => handleDoneToDo(toDo.id, true)}
            />
          )}
          {toDo.important ? (
            <img
              className='important-star'
              src='https://image.flaticon.com/icons/svg/1828/1828884.svg'
              onClick={() => onButton(toDo.id, false)}
              alt=''
            />
          ) : (
            <img
              className='important-star'
              src='https://image.flaticon.com/icons/svg/1828/1828970.svg'
              onClick={() => onButton(toDo.id, true)}
              alt=''
            />
          )}
          <div style={{ width: '50%' }}>
            <div className={toDo.done ? 'toDoTitle strike' : 'toDoTitle'}>
              {toDo.name}
            </div>
            <div className={toDo.done ? 'description strike' : 'description'}>
              {toDo.description}
            </div>
          </div>
          <Button
            variant='outline-danger'
            onClick={() => handleDeleteToDo(toDo.id)}
          >
            Remove
          </Button>{' '}
        </div>
      );
    });
  };

  const onButton = (id: string, showImportant: boolean) => {
    getImportantToDo(id, showImportant);
  };

  const handleDoneToDo = (id: string, done: boolean) => {
    doneToDo(id, done);
  };

  const handleDeleteToDo = (id: string) => {
    deleteToDo(id);
  };

  return <div className='toDoListDiv'>{renderToDos()}</div>;
};

export default ToDoList;

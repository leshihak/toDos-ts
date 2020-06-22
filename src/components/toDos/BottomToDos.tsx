import React from 'react';
import { Button } from 'react-bootstrap';

interface Props {
  onButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  deleteAllToDo: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const BottomToDos = ({ onButtonClick, deleteAllToDo }: Props) => {
  return (
    <div className='bottom-buttons'>
      <Button variant='primary' onClick={onButtonClick}>
        Create new To Do
      </Button>{' '}
      <Button variant='dark' onClick={deleteAllToDo}>
        Delete all To Do
      </Button>{' '}
    </div>
  );
};

export default BottomToDos;

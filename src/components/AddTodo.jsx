import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

const AddTodo = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (title !== '') {
      await addDoc(collection(db, 'todos'), {
        title,
        completed: false,
      });
      setTitle('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='input_container'>
        <input
          type='text'
          placeholder='enter todo'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div className='btn_container'>
        <button>Add</button>
      </div>
    </form>
  );
};

export default AddTodo;

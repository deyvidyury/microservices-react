import axios from 'axios';
import React, { useState } from 'react';

const PostCreate = ({ setFetchPosts }) => {
  const [title, setTitle] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:4000/posts', {
      title
    });

    setTitle('');
    setFetchPosts(true);
  };

  return <div>
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <label>Title</label>
        <input className='form-control' value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <button className='btn btn-primary'>Submit</button>
    </form>
  </div>;
};

export default PostCreate;
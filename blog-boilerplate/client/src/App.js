import React, { useState } from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

const App = () => {
  const [fetchPosts, setFetchPosts] = useState(false);

  return <div className='container'>
    <h1>Create Post</h1>
    <PostCreate setFetchPosts={setFetchPosts} />
    <hr />
    <h1>Posts</h1>
    <PostList fetch={fetchPosts} />
  </div>;
};

export default App;
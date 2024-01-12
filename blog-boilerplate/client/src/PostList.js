import axios from 'axios';
import React, { useEffect, useState } from "react";
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

const PostList = ({ fetch }) => {
  const [posts, setPosts] = useState({});
  const [fetchComments, setFetchComments] = useState(false);

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4000/posts');
    setPosts(res.data);
  };

  useEffect(() => { fetchPosts(); }, [fetch]);
  useEffect(() => { setFetchComments(false); }, [fetchComments]);

  const renderedPosts = Object.values(posts).map(post => {
    return <div className="card" style={{ width: '30%', marginBottom: '20px' }} key={post.id}>
      <div className="card-body">
        <h3>{post.title}</h3>
        <CommentList fetchComments={fetchComments} postId={post.id} />
        <CommentCreate setFetchComments={setFetchComments} postId={post.id} />
      </div>
    </div>;
  });

  return <div className="d-flex flex-row flex-wrap justify-content-between">
    {renderedPosts}
  </div>;
};

export default PostList;
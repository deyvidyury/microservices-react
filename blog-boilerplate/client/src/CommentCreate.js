import axios from 'axios';
import React, { useState } from "react";

const CommentCreate = ({ postId, setFetchComments }) => {
  const [content, setContent] = useState('');

  const onSumit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content
    });
    setContent('');
    setFetchComments(true);
  };
  return <div>
    <form onSubmit={onSumit}>
      <div className="form-group">
        <label>New Comment</label>
        <input className="form-control" value={content} onChange={e => setContent(e.target.value)} />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  </div>;
};

export default CommentCreate;
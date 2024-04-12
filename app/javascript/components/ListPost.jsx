import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListPost = () => {
  const [posts, setPosts] = useState([]);
  const current_user = localStorage.getItem('currentUserId')
  console.log(current_user);
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`/${current_user}/posts`);
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <div className="container">
    <h2 className="my-4">List of Posts</h2>
    <ul className="list-group">
      {posts.map((post) => (
        <li key={post.id} className="list-group-item">
          <strong>{post.title}</strong>
          <p>{post.description}</p>
          {post.image && (
            <img src={post.image.url} alt={post.title} className="img-thumbnail mt-3" style={{ maxWidth: '200px', maxHeight: '200px' }} />
          )}
        </li>
      ))}
    </ul>
  </div>
);
};

export default ListPost;

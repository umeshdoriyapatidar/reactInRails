import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
const AddPost = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('post[user_id]', localStorage.getItem('currentUserId'))
    formData.append('post[title]', title);
    formData.append('post[description]', description);
    formData.append('post[image]', image);

    try {
      const response = await axios.post('/create_post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content,
        },
      });
      console.log(response);
      if(response.status === 201){
        navigate('/')
      }else{
        throw new Error (response.error)
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit} className="p-3">
      <div className="form-group">
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" />
      </div>
      <div className="form-group">
        <label>Image:</label>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} className="form-control-file" />
      </div>
      <button type="submit" className="btn btn-primary mt-3">Create Post</button>
    </form>
  </div>
  );
};

export default AddPost;

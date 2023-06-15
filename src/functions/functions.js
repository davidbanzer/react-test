import axios from 'axios';

export const getPosts = async (state) => {
  let result = await axios.get('http://127.0.0.1:8000/api/posts');
  state(result.data.data);
}

export const addPost = async (title, content) => {
  const body = {
    title,
    content,
  }
  let result = await axios.post('http://127.0.0.1:8000/api/posts', body)
  console.log(result)
}

export const deletePost = async (id) => {
  let result = await axios.delete(`http://127.0.0.1:8000/api/posts/${id}`)
  console.log(result)
}
import React, { useEffect, useState } from 'react'
import  {getPosts, deletePost}  from '../functions/functions';

const Home = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    getPosts(setPosts)
  }, [])

  const handleDelete = (id) => {
    // Aquí puedes realizar acciones adicionales con los valores del formulario, como enviarlos a un servidor o realizar validaciones.
    deletePost(id);
  };
  return (
    <>
      <h1>Home</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
    </>
  )
}

export default Home
import React, { useState } from 'react';
import { addPost } from '../functions/functions';
const Form = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar acciones adicionales con los valores del formulario, como enviarlos a un servidor o realizar validaciones.
    addPost(title, content);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="content">Contenido:</label>
        <textarea
          id="content"
          value={content}
          onChange={handleContentChange}
          required
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;

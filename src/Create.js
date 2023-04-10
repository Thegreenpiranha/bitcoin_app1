import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      //history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add New Content</h2>
      <form onSubmit={handleSubmit}>
        <label>Content title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* this needs to be changed to a drag n drop for video content */}
        <label>Content body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Content Type:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="freemium">Freemium</option>
          <option value="premium">Premium</option>
        </select>
        <button>Add Content</button>
      </form>
    </div>
  );
}
 
export default Create;
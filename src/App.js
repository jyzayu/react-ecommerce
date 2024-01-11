import './App.css';
import Reat, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setPosts(response.data));
  });

  return (
    <div>
      <ul>
        {' '}
        {posts.map((post) => (
          <li key={post.id}>
            {' '}
            title = {post.title} body {post.body}{' '}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import api from '../../api';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      const response = await api.get('/items');
      setItems(response.data);
    }
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Items:</h1>
      <ul>
        {items.map(item => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
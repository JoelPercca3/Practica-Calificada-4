// App.js
import React, { useState, useEffect } from 'react';
import UserCard from './componentes/UserCard';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container">
      <div className="characters-list">
        {users.map(user => (
          <UserCard
            key={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            imageUrl={`https://picsum.photos/seed/${user.id}/300/300`}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

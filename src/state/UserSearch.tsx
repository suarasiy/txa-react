import { useState } from 'react';

const users = [
  { name: 'Suara', age: 20 },
  { name: 'Luna', age: 24 },
  { name: 'Siy', age: 21 }
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{name: string, age: number} | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name.toLowerCase() === name.toLowerCase();
    });

    setUser(foundUser);
  };
  
  return (
    <div>
      <h3>User Search</h3>

      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={onClick}>Search</button>

      <div>
        <h3>Result:</h3>
        <p>{user && user.name}</p>
        <p>{user && user.age}</p>
      </div>
    </div>
  )
};

export default UserSearch;
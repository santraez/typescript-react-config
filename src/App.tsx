import { useEffect, useState } from "react";
import UserForm, { UserFormState } from "./forms/User";
import "./App.css";

type User = UserFormState & { id: number }

function App() {
  const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    (async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data: User[] = await response.json()
      setUsers(data)
    })()
  }, [])
  return (
    <div className="App">
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
      <UserForm handleSubmit={user => setUsers([...users, {...user, id: Date.now()}])} />
    </div>
  );
}

export default App;

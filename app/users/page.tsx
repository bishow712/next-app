import { link } from 'fs';
import React, { cache } from 'react'

interface User {
    id: number;
    name: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache:'no-store'}) //{cache:'no-store'} Doesn't store in cache, {next: {revalidate: 10}} to refresh after certain seconds(10 seconds here)
  const users: User[] = await res.json()
  
  return (    
    <>
        <h1>Users</h1>
        <p>{new Date().toLocaleTimeString()}</p>
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    </>
  )
}

export default UsersPage

import React, { useState, useEffect } from 'react'
import User from './User'

function UserList() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      await fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setData(data))
    }
    fetchData()
  }, [])

  return (
    <>
      <table className="table table-striped" style={{ cursor: 'pointer' }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        {data.map((user) => (
          <User
            id={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            key={user.id}
          />
        ))}
      </table>
    </>
  )
}

export default UserList

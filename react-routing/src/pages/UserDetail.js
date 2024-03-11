import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserDetail() {
  const [user, setUser] = useState({})
  const { id } = useParams()

  useEffect(() => {
    async function fetchData() {
      await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => setUser(data))
    }

    fetchData()
  }, [id])
  console.log(user)

  return user.id ? (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">City</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{user.id}</th>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.address['city']}</td>
        </tr>
      </tbody>
    </table>
  ) : (
    <h1>Loading...</h1>
  )
}

export default UserDetail

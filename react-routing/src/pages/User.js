import React from 'react'
import { useNavigate } from 'react-router-dom';

function User({ id, name, username, email }) {
  const navigate = useNavigate()

return (
    <>
      <tbody>
        <tr onClick={() => navigate(`${id}`)}>
          <th scope="row">{id}</th>
          <td>{name}</td>
          <td>{username}</td>
          <td>{email}</td>
        </tr>
      </tbody>
    </>
  )
}

export default User

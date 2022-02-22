import axios from "axios"
import React, { useEffect, useState } from "react"

const Data = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      setUsers(response.data)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {users.length > 0 && (
        <table border="2">
        <thead>
        <tr>
       <th> userid</th>
       <th> name</th>
       <th> username</th>
       <th> email</th>
       </tr>
       </thead>
          {users.map(user => (
            <tbody>
            <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td> <button type="button">delete</button> </td>
            <td> <button type="button">update</button> </td>
            </tr>
            </tbody>
          ))}
          
        </table>
      )}
    </div>
  )
}

export default Data

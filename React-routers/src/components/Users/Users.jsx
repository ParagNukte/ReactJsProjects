// import React from 'react'
import { useParams } from 'react-router-dom'

function Users() {
    const {userId} = useParams();
  return (
    <div>Users : {userId}</div>
  )
}

export default Users
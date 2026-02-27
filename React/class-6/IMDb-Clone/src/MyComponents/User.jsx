import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams();

  return (
    <div>User  {params.userId}
    </div>
  )
}

export default User
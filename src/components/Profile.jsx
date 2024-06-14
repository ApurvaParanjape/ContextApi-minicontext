import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)
  return (
    <div>
      <h2>Profile</h2>
      {
        !user? <p>Please Login first</p>
        :
        <p>Welcome {user.username}</p>
      }
    </div>
  )
}

export default Profile

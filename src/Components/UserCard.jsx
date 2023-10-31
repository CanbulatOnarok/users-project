import React from 'react'

const UserCard = ({ user }) => {
  return (
    <div className='user-card'>
      <img src={user.picture.large} alt="" />
      <div className="user-info">
        <h1>{user.name.first} {user.name.last}</h1>
        <p>{user.location.city}/{user.location.country}</p>
        <p>{user.email}</p>

      </div>

    </div>
  )
}

export default UserCard
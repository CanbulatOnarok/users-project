import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserCard from '../Components/UserCard'


// https://randomuser.me/api/?results=10

const Userlist = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const response = await axios.get('https://randomuser.me/api/?results=10');
setUsers(response.data.results);
  }

  useEffect(()=>{
    getData();
  },[])


  return (
    <div className='user-list'>
      <ul>
        {users.map((user,index)=>(
          <li key={index}> <UserCard  user={user}  /> </li>
        ))}
      </ul>
  
    </div>
  )
}

export default Userlist
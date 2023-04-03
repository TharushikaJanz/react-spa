import React, { useEffect, useState } from 'react'
import ProfileCard from './sub-components/ProfileCard'

function UserView() {
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
      fetch('https://reqres.in/api/users?page=1')
        .then(response => response.json())
        .then(data => setUsersData(data.data))
        .catch(error => console.log(error));
    }, []);
  
    console.log(usersData)
    return (
        <div>
            <h1>UserView</h1>
            {usersData.map((user) => (
                <ProfileCard firstName={user.first_name} email={user.email}/>
            ))}
            
        </div>
    )
}

export default UserView
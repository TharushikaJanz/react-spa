import React from 'react'
import { useNavigate } from 'react-router-dom'

function UserInformationView() {
    let navigate = useNavigate();
  return (
    <div>UserInformationView
        <button onClick={() => {
            navigate("/")
        }}>Go Back</button>
    </div>
  )
}

export default UserInformationView
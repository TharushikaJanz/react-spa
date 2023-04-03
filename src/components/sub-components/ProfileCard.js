import { Avatar, Paper } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function ProfileCard() {
  return (
    <Paper elevation={2} sx={{width: '190px', display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 1,
    }}>
         <Avatar
      alt="Profile Icon"
      variant="square"
      style={{ width: '185px', height: '185px', backgroundColor: '#EEF5F5',borderRadius: 5,borderColor: '#fff',  border: '1px solid black'}}
    >
      <AccountCircleIcon sx={{ fontSize: 210, color:"#92D0E1"  }}/>
    </Avatar>
        <div>first_name</div>
        <div>Email</div>
    </Paper>
    
    
  )
}

export default ProfileCard
import { Avatar, Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProfileCard(props) {
    let navigate = useNavigate();
    
    const { firstName, email, userAvatar} = props

    const handleClick = () => {
        navigate('/')
    }

    return (
        <Paper elevation={2}
            component="button"
            sx={{
                width: '260px', display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 1,
            }}
            onClick={handleClick}>
            <Avatar
                alt="Profile Icon"
                variant="square"
                style={{
                    width: '250px',
                    height: '250px',
                    backgroundColor: '#EEF5F5',
                    borderRadius: 5,
                    borderColor: '#fff',
                    border: '1px solid black',
                }}
            >
                <img src={userAvatar} alt={firstName} width={200} height={200}/>
            </Avatar>
            <div>
                <Box >
                    <Typography variant="body1" align='left'>
                        <b>{firstName}</b>
                    </Typography>
                </Box>
                <Box >
                    <Typography variant="body2">
                        {email}
                    </Typography>
                </Box>
            </div>
        </Paper>


    )
}

export default ProfileCard
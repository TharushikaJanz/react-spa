import { Avatar, Box, Paper, Typography } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function ProfileCard(props) {
    const { firstName, email, userAvatar } = props
    return (
        <Paper elevation={2}
            component="button"
            sx={{
                width: '200px', display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 1,
            }}
            onClick={() => console.log("Pressed")}>
            <Avatar
                alt="Profile Icon"
                variant="square"
                style={{
                    width: '185px',
                    height: '185px',
                    backgroundColor: '#EEF5F5',
                    borderRadius: 5,
                    borderColor: '#fff',
                    border: '1px solid black',
                }}
            >
                <img src={userAvatar} alt={firstName} />
            </Avatar>
            <div>
                <Box>
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
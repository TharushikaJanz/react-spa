import React, { useEffect, useState } from 'react'
import ProfileCard from './sub-components/ProfileCard'
import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function UserView() {
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=1')
            .then(response => response.json())
            .then(data => setUsersData(data.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <Box
                sx={{
                    backgroundColor: "#2EADF1",
                    padding: 2,
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                <Typography variant="h5" color="#fff">Home Page</Typography>
            </Box>
            <Box
                sx={{
                    padding: 5,
                    display: 'flex',
                    justifyContent: 'left'
                }}>
                <Typography variant="h5" color="#000"><b>Users</b></Typography>
            </Box>


            <div style={{ display: 'flex', justifyContent: 'center', overflowY: 'auto'}}>
                <Grid container spacing={5} style={{ width: '100%', maxWidth: '900px' }}>
                    {usersData.map((user, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} style={{ padding: 50}}>
                            <Link to={`/user/${user.id}`} key={user.id}>
                                <ProfileCard
                                    userAvatar={user.avatar}
                                    firstName={user.first_name}
                                    email={user.email}
                                />
                            </Link>

                        </Grid>
                    ))}
                </Grid>
            </div>


        </>
    )
}

export default UserView
import { Avatar, Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserInformationView() {
    let navigate = useNavigate();
    const { id } = useParams();

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch(`https://reqres.in/api/users/${id}`)
            .then(response => response.json())
            .then(data => setUserData(data.data))
            .catch(error => console.log(error));
    }, [id]);

    console.log('userInfo', userData)
    return (
        <> <Box
            sx={{
                backgroundColor: "#2EADF1",
                padding: 2,
                display: 'flex',
                justifyContent: 'left'
            }}>
            <Typography
                variant="button"
                color="#fff"
                sx={{ cursor: 'pointer', textTransform: 'capitalize', fontSize: 25 }}
                onClick={() => {
                    navigate("/")
                }}>
                Back
            </Typography>
        </Box>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 50, padding: 20 }}>
                {userData && (
                    <Grid container spacing={0} style={{ width: '100%', maxWidth: '900px' }} direction="row"
                        justifyContent="center"
                        alignItems="center">
                        <Grid item xs={12} sm={6} md={5} style={{ padding: 2 }}>
                            <Avatar
                                alt="Profile Icon"
                                variant="square"
                                style={{
                                    width: '250px',
                                    height: '250px',
                                    backgroundColor: '#EEF5F5',
                                    borderRadius: 5,
                                }}
                            >
                                <img src={userData.avatar} alt={"user-avatar"} width={200} height={200} />
                            </Avatar>

                        </Grid>
                        <Grid item xs={12} sm={6} md={7} style={{ padding: 2 }} >
                            <Grid container sx={{
                                backgroundColor: '#EEF5F5',
                                borderRadius: 5,
                                padding: 2
                            }}
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            >
                                <Grid item xs={5} sm={5} md={5}>
                                    <Typography mb={1} variant='body1'>First Name </Typography>
                                    <Typography mb={1} variant='body1'>Email </Typography>
                                    <Typography mb={1} variant='body1'>Last Name </Typography>
                                </Grid>
                                <Grid item xs={7} sm={7} md={7}>
                                    <Typography mb={1} variant='body1'>{userData.first_name}</Typography>
                                    <Typography mb={1} variant='body1'>{userData.last_name}</Typography>
                                    <Typography mb={1} variant='body1'>{userData.email}</Typography>
                                </Grid>


                            </Grid>
                        </Grid>
                    </Grid>
                )}
            </div>


        </>
    )
}

export default UserInformationView
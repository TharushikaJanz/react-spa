import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import ProfileCard from "./sub-components/ProfileCard";

/**
 * UserView component displays a list of user profiles fetched from an external API.
 * @returns {JSX.Element}
 */
function UserView() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch users data from API and update state
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((data) => setUserData(data.data))
      .catch(() => null);
  }, []);

  // Header section
  const Header = () => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#03045E",
        color: "#fff",
        height: "80px",
        paddingLeft: "30px",
        "&:hover": {
          backgroundColor: "#023E8A",
        },
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Home
      </Typography>
    </Box>
  );

  // Users title section
  const Title = () => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ADE8F4",
        height: "50px",
        paddingLeft: "30px",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "600", letterSpacing: 0.6 }}>
        Users
      </Typography>
    </Box>
  );

  // User profiles section
  const UserProfiles = () => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        overflowY: "auto",
        padding: "20px",
      }}
    >
      <Grid container spacing={5} sx={{ maxWidth: "900px" }}>
        {userData.map(({ id, avatar, first_name, email }) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <Link to={`/user/${id}`}>
              <ProfileCard
                userAvatar={avatar}
                firstName={first_name}
                email={email}
                key={id}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <div style={{backgroundColor: '#F0F8FF'}}>
      <Header />
      <Title />
      <UserProfiles />
    </div>
  );
}

export default UserView;

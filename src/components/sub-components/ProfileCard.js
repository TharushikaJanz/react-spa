import {
    Avatar,
    Box,
    Card,
    CardActionArea,
    CardContent,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { useNavigate } from "react-router-dom";
  
  /**
   * ProfileCard component displays a user profile with their avatar, name and email.
   * @param {Object} props - The component props.
   * @param {string} firstName - The first name of the user.
   * @param {string} email - The email of the user.
   * @param {string} userAvatar - The URL of the user's avatar image.
   * @returns {JSX.Element} - The rendered component.
   */
  function ProfileCard(props) {
    const { firstName, email, userAvatar } = props;
    const navigate = useNavigate();
  
    const handleProfileClick = () => {
      navigate("/");
    };
  
    return (
      <Card
        sx={{
          maxWidth: 345,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
          },
        }}
        onClick={handleProfileClick}
      >
        <CardActionArea
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 5,
          }}
        >
          <Avatar
            alt={firstName}
            variant="square"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.1)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <img src={userAvatar} alt={firstName} width={200} height={200} />
          </Avatar>
        </CardActionArea>
        <CardContent sx={{ flexGrow: 1 }}>
          <Box sx={{ marginBottom: "20px" }}>
            <Typography variant="h6" align="center" sx={{ fontWeight: "bold" }}>
              {firstName}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="subtitle1"
              align="center"
              sx={{ color: "#707070" }}
            >
              {email}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    );
  }
  
  export default ProfileCard;
  
import {
    Button,
    Card,
    CardMedia,
    CircularProgress,
    Grid,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Renders a grid item with a label and a value.
function GridItem({ gridItems, avatarUrl }) {
    return (
        <Grid
            container
            spacing={0}
            style={{ width: "100%", maxWidth: "900px" }}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={12} sm={6} md={5} style={{ padding: 2 }}>
                <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={avatarUrl}
                        alt="user-avatar"
                    />
                </Card>
            </Grid>

            <Grid
                item
                container
                xs={12}
                sm={6}
                md={7}
                style={{
                    backgroundColor: "#EEF5F5",
                    borderRadius: 5,
                    padding: 25,
                }}
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                {gridItems.map((item, index) => (
                    <Grid
                        item
                        container
                        xs={5}
                        sm={5}
                        md={5}
                        key={index}
                        direction="row"
                        justifyContent="left"
                        alignItems="center"
                    >
                        <Grid item xs={5} sm={5} md={5}>
                            <Typography m={1} variant="body1">
                                <b>{item.label}</b>
                            </Typography>
                        </Grid>
                        <Grid item xs={7} sm={7} md={7}>
                            <Typography m={1} variant="body1">
                                {item.value}
                            </Typography>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}

// Renders the user information view.
function UserInformationView() {
    const navigate = useNavigate();
    const { id } = useParams();

    // State for the user data.
    const [userData, setUserData] = useState(null);

    // State for the loading data indicator.
    const [loading, setLoading] = useState(true);

    // Array of grid items to render.
    const gridItems = [
        { label: "First Name", value: userData?.first_name },
        { label: "Last Name", value: userData?.last_name },
        { label: "Email", value: userData?.email },
    ];

    useEffect(() => {
        fetch(`https://reqres.in/api/users/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setUserData(data.data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    }, [id]);

    // Renders the view.
    return (
        <>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    navigate("/");
                }}
                sx={{
                    backgroundColor: "#2EADF1",
                    padding: "10px 20px",
                    display: "flex",
                    justifyContent: "left",
                    textTransform: "capitalize",
                    fontSize: 28,
                    width: "100%",
                    borderRadius: 0,
                    "&:hover": {
                        backgroundColor: "#1F8ECF",
                    },
                }}
            >
                Back
            </Button>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 100,
                    padding: 50,
                    backgroundColor: "#C6E6FB",
                }}
            >
                {loading ? (
                    <CircularProgress />
                ) : (
                    <GridItem gridItems={gridItems} avatarUrl={userData.avatar} />
                )}
            </div>
        </>
    );
}

export default UserInformationView;

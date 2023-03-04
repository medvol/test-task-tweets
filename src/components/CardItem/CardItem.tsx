import { Avatar, Box } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";
import { ICardItemProps } from "../../interfaces/common";
import { loadLocal, saveLocal } from "../../services/storage";

const CardItem: React.FC<ICardItemProps> = ({ user }) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [followers, setFollowers] = useState<number>(
    loadLocal("followers") ?? user.followers
  );

  useEffect(() => {
    saveLocal("followers", followers);
  }, [followers]);

  const handleClick = () => {
    setClicked(!clicked);
    if (clicked) {
      setFollowers((prev) => prev - 1);
    }
    if (!clicked) {
      setFollowers((prev) => prev + 1);
    }
  };
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      component="li"
      sx={{
        borderRadius: 1,
      }}
    >
      <Card
        sx={{
          maxWidth: 380,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "100%",
          background:
            "linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)",
        }}
      >
        <CardMedia
          sx={{
            position: "relative",
            height: 214,
            backgroundImage: {
              xs: "url(/src/assets/background1x.png)",
              md: "url(/src/assets/background2x.png)",
            },
            backgroundSize: "308px 168px",
          }}
        >
          <Box
            component="img"
            src="/src/assets/Logo1x.png"
            srcSet="
              /src/assets/Logo1x.png 1x,
              /src/assets/Logo2x.png 2x,
              /src/assets/Logo3x.png 3x
            "
            alt="Logo"
            width={76}
            height={22}
            sx={{
              position: "absolute",
              display: 'block',
              top: "20px",
              left:"20px"
            }}
          />
          <Box
            sx={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              left: "50%",
              bottom: 0,
              transform: "translate(-50%, 50%)",
              width: 80,
              height: 80,
              borderRadius: "50%",
              border: "8px solid #EBD8FF",
              zIndex: 20,
              background:
                "linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)",

              "&::before": {
                content: '""',
                position: "absolute",
                transform: " translate(-50%, -50%)",
                top: "50%",
                left: "50%",
                width: 80,
                height: 80,
                borderRadius: "100%",
                boxShadow:
                  "0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF",
              },
            }}
          >
            <Avatar
              alt={user.user}
              src={user.avatar}
              sx={{
                width: 62,
                height: 62,
              }}
            />
          </Box>
        </CardMedia>

        <CardContent
          sx={{
            position: "relative",
            pb: 3.25,
            pt: 7.75,
            px: 8,

            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: 8,
              backgroundColor: "primary.main",
              zIndex: "2",
              boxShadow:
                " 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF",
            },
          }}
        >
          <Typography
            variant="body1"
            color="primary"
            component="p"
            sx={{ mb: 2 }}
          >
            {user.tweets} TWEETS
          </Typography>
          <Typography variant="body1" color="primary" component="p">
            {followers.toLocaleString("en-US")} FOLLOWERS
          </Typography>
        </CardContent>
        <CardActions sx={{ pb: 4.5, px: 11.5 }}>
          <Button
            type="button"
            variant="contained"
            color={clicked ? "secondary" : "primary"}
            sx={{
              minWidth: 24.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 1.75,
              px: 7,
              fontSize: 18,
              lineHeight: 1.22,
              borderRadius: 0.5,
              boxShadow: "px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)",
            }}
            onClick={handleClick}
          >
            {clicked ? "FOLLOWING" : "FOLLOW"}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardItem;

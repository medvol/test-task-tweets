import React from "react";
import users from "../../data/users.json";
import CardItem from "../CardItem/CardItem";
import { Grid } from "@mui/material";

const CardList: React.FC = () => {
  return (
    <Grid container component="ul" spacing={{ xs: 2 }}>
      {users.map((user) => (
        <CardItem user={user} key={user.id} />
      ))}
    </Grid>
  );
};

export default CardList;

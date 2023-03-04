import React from "react";
import users from "../../data/users.json";
import CardItem from "../CardItem/CardItem";
import { IUser } from "../../interfaces/common";
import { Grid } from "@mui/material";

const CardList: React.FC = () => {
  return (
    <Grid container component="ul" spacing={{ xs: 2, md: 3, alignItems:"stretch" } }>
      {users.map((user) => (
        <CardItem user={user} key={user.id} />
      ))}
    </Grid>
  );
};

export default CardList;

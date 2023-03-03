import React from "react";
import users from "../../data/users.json";
import Card from "../Card/Card";
import { User } from "../../interfaces/common";
import { Grid } from "@mui/material";

function CardList() {
  return (
    <Grid
      container
      component='ul'
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {users.map((user) => (
        <Card user={user} key={user.id} />
      ))}
    </Grid>
  );
}

export default CardList;

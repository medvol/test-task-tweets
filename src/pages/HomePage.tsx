import React from "react";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CardList from "../components/CardList/CardList";
import { theme } from "../services/theme";

function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth='xl'>
        <CardList />
      </Container>
    </ThemeProvider>
  );
}

export default HomePage;

import React, { useState } from "react";

import {
  Container,
  Typography,
  Card,
  Grid,
  TextField,
} from "@material-ui/core";

import { MovieIcon } from "../../icons";

import AnimatedCards from "../../components/AnimatedCards";

import styles from "./style";

export default () => {
  const [searchText, setSearchText] = useState("");
  const classes = styles();

  const handleTextChange = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}>Bienvenido!</Typography>
          </Grid>
          <Grid>
            <MovieIcon className={classes.movieIcon} />
          </Grid>
        </Grid>
        <TextField
          value={searchText}
          placeholder="Nombre..."
          onChange={handleTextChange}
          className={classes.textFieldSearch}
        ></TextField>
        <Grid className={classes.buttonsContainer}>
          <AnimatedCards searchText={searchText} />
        </Grid>
      </Card>
    </Container>
  );
};

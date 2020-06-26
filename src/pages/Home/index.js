import React, { useState } from "react";

import {
  Container,
  Typography,
  Card,
  Grid,
  TextField,
} from "@material-ui/core";

import AnimatedCards from "../../components/AnimatedCards";

import styles from "./style";

export default () => {
  const [searchText, setSearchText] = useState("");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const classes = styles();

  const handleMouseEnter = (e) => {
    const movementX = e.pageX;
    const movementY = e.pageY;
    setCursorPosition({
      x: movementX > 400 ? -5 : 5,
      y: movementY > 400 ? -5 : 5,
    });
  };
  const handleCursorLeave = () => {
    setCursorPosition({
      x: 0,
      y: 0,
    });
  };
  const handleTextChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <Container className={classes.container}>
      <Card
        className={classes.cardContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleCursorLeave}
        style={{ boxShadow: `${cursorPosition.x}px ${cursorPosition.y}px 3px` }}
      >
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}>Búsqueda</Typography>
          </Grid>
        </Grid>
        <TextField
          value={searchText}
          placeholder="Ingrese su búsqueda..."
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

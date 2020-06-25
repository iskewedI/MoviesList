import PropTypes from "prop-types";

import React from "react";
import { Card, Grid, Typography, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

import styles from "./styles";

const MovieResult = ({ Title, Year, Type, imdbID, Poster, history }) => {
  const classes = styles();

  const handleSeeMore = () => {
    history.push(`/movie/${imdbID}`);
  };

  return (
    <Card className={classes.cardContainer}>
      <Grid container>
        <Grid item>
          <img src={Poster} alt={Title} className={classes.poster} />
        </Grid>
        <Grid item className={classes.titlesContainer}>
          <Typography>{Title}</Typography>
          <Typography>{Year}</Typography>
          <Typography>{Type}</Typography>
          <Button color="primary" variant="contained" onClick={handleSeeMore}>
            Ver más...
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

MovieResult.propTypes = {
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
  Type: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired,
  Poster: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(MovieResult); // 'withRouter' permite que el parámetro 'history' venga con datos

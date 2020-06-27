import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import styles from "./styles";

const MovieCard = ({ Title, Year, Type, imdbID, Poster }) => {
  const [contentDisplayed, displayContent] = useState(false);
  const classes = styles();

  const setContentDisplay = () => {
    displayContent(true);
  };
  const hiddeContentDisplay = () => {
    displayContent(false);
  };
  return (
    <Card className={classes.cardRoot}>
      <CardActionArea
        className={classes.actionArea}
        onMouseEnter={setContentDisplay}
        onMouseLeave={hiddeContentDisplay}
      >
        <CardContent className={classes.cardContent}>
          <CardMedia className={classes.image} image={Poster}></CardMedia>
          {contentDisplayed && (
            <div className={classes.cardText}>
              <Typography gutterBottom variant="h5" component="h2">
                {Title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="h3">
                {Year}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="h3">
                {Type}
              </Typography>
            </div>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ver más
        </Button>
      </CardActions>
    </Card>
  );
};

MovieCard.propTypes = {
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
  Type: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired,
  Poster: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(MovieCard);

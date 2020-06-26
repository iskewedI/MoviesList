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
  const [contentDisplayed, displayContent] = React.useState(false);
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
        <CardMedia
          className={classes.media}
          image={Poster}
          // title={Title}
          style={
            contentDisplayed && {
              backgroundImage: `linear-gradient(0deg, rgba(254,255,255,1) 0%, rgba(255,255,255,0.9) 10%, rgba(255,255,255,0) 100%), 
            url(${Poster})`,
            }
          }
        >
          <CardContent
            className={
              contentDisplayed
                ? classes.contentAreaDisplayed
                : classes.contentAreaHidden
            }
          >
            <Typography gutterBottom variant="h6" component="h2">
              {Title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {Year}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {Type}
            </Typography>
          </CardContent>
        </CardMedia>
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

import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { searchMovie } from "../../redux/actions/search";
import { movieResults } from "../../redux/selectors";

import { CircularProgress } from "@material-ui/core";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import Button from "@material-ui/core/Button";
import Card from "../Card";

import { isSearchLoading } from "../../redux/selectors";

import styles from "./styles";

export default function AnimatedCards({ searchText }) {
  const classes = styles();

  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    setSearch(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
    setSearch(true);
  };
  const isLoading = useSelector((state) => isSearchLoading(state));

  const dispatch = useDispatch();

  const movies = useSelector((state) => movieResults(state));

  const [isLooked, setIsLooked] = useState(false);

  useEffect(() => {
    if (search) {
      if (searchText && !isLooked) {
        setIsLooked(true);
        dispatch(searchMovie({ movieName: searchText }));
      }
    }
  }, [searchText, isLooked, search, dispatch]);

  const renderMovies = () => {
    if (movies) {
      return movies
        .slice(0, 3)
        .map((value, index) => <Card key={index} {...value} />);
    } else if (isLoading) {
      return <CircularProgress size={100} color="primary" />;
    } else {
      return <div>Cargando...</div>;
    }
  };
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        BUSCAR
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        PaperProps={{ className: classes.paper }}
      >
        <DialogTitle id="responsive-dialog-title" className={classes.title}>
          {"Selecciona la película"}
        </DialogTitle>
        <DialogContent className={classes.navCards}>
          {renderMovies()}
        </DialogContent>
        <DialogActions className={classes.navButtons}>
          <Button className={classes.arrowLeft}>{<ArrowBackIcon />}</Button>
          <Button className={classes.arrowRight}>{<ArrowForwardIcon />}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

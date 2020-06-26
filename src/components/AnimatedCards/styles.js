import { makeStyles } from "@material-ui/styles";

export default makeStyles({
  paper: {
    maxWidth: 900,
    width: "300vw",
    maxHeight: 650,
    height: "80vh",
  },
  title: {
    textAlign: "center",
  },
  navCards: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "1fr",
    margin: "0 auto",
    gridColumnGap: "1.5vw",
  },
  navButtons: {
    float: "right",
    display: "block",
  },
  arrowLeft: {
    float: "left",
  },
  arrowRight: {
    float: "right",
  },
  circularProgress: {
    //Centering the Circular Progress
    gridColumn: 2,
    alignSelf: "center",
  },
});

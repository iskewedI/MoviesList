import { makeStyles } from "@material-ui/styles";

export default makeStyles({
  cardRoot: {
    width: "25vw",
    maxWidth: 200,
    display: "grid",
    gridTemplateRows: "90% 10%",
  },
  actionArea: {
    height: "100%",
  },
  media: {
    height: "100%",
    display: "grid",
    maxWidth: 200,
  },
  contentAreaDisplayed: {
    display: "grid",
    gridTemplateRows: "95% 5% 5%",
  },
  contentAreaHidden: {
    display: "none",
  },
});

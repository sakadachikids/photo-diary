import React from "react";
import * as Mat from "@material-ui/core";
import * as Icon from "@material-ui/icons";
import DiaryListItem from "./DiaryListItem";

const styles = (theme: Mat.Theme) =>
  Mat.createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      width: 500,
      height: 450
    },
    appBar: {
      marginBottom: "16px",
      position: "relative"
    },
    fab: {
      position: "absolute",
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 2,
      color: "white"
    }
  });

type Prop = Mat.WithStyles<typeof styles> & {
  classes: { [type: string]: string };
  diaries: Diary[];
};

const Home = (props: Prop) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Mat.AppBar position="static" className={classes.appBar}>
        <Mat.Toolbar>
          <Mat.Typography variant="h6" color="inherit">
            Picture Diary
          </Mat.Typography>
        </Mat.Toolbar>
      </Mat.AppBar>
      <Mat.GridList cellHeight={180} className={classes.gridList}>
        {props.diaries.map(diary => (
          <DiaryListItem diary={diary} />
        ))}
      </Mat.GridList>
    </div>
  );
};

export default Mat.withStyles(styles)(Home);

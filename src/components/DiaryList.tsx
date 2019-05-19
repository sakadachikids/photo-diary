import React from "react";
import * as Mat from "@material-ui/core";
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
      height: "100%"
    },
    appBar: {
      marginBottom: "16px",
      position: "relative"
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
            Photo Diary
          </Mat.Typography>
        </Mat.Toolbar>
      </Mat.AppBar>
      <Mat.GridList cellHeight={180} className={classes.gridList}>
        {props.diaries.map(diary => (
          <DiaryListItem key={diary.id} diary={diary} />
        ))}
      </Mat.GridList>
    </div>
  );
};

export default Mat.withStyles(styles)(Home);

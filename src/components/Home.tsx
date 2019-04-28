import React from "react";
import { createStyles, withStyles, Theme } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { AppBar, Typography } from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
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
    icon: {
      color: "rgba(255, 255, 255, 0.54)"
    },
    appBar: {
      marginBottom: "16px"
    }
  });

interface Prop {
  classes: { [type: string]: string };
  tileData: PhotoData[];
}

const Home = (props: Prop) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Picture Diary
          </Typography>
        </Toolbar>
      </AppBar>
      <GridList cellHeight={180} className={classes.gridList}>
        {props.tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default withStyles(styles)(Home);

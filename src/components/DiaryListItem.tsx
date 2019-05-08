import React from "react";
import * as Mat from "@material-ui/core";
import * as Icon from "@material-ui/icons";

const styles = (theme: Mat.Theme) =>
  Mat.createStyles({
    icon: {
      color: "rgba(255, 255, 255, 0.54)"
    }
  });

type Props = React.ComponentProps<typeof Mat.GridListTile> &
  Mat.WithStyles<typeof styles> & {
    diary: Diary;
  };

export default Mat.withStyles(styles)(({ diary, classes, ...props }: Props) => {
  return (
    <Mat.GridListTile {...props} key={diary.id}>
      <img src={diary.img} alt={diary.title} />
      <Mat.GridListTileBar
        title={diary.title}
        subtitle={<span>{diary.description}</span>}
        actionIcon={
          <Mat.IconButton className={classes.icon}>
            <Icon.Info />
          </Mat.IconButton>
        }
      />
    </Mat.GridListTile>
  );
});

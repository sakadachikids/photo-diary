import React from "react";
import {
  createStyles,
  withStyles,
  Theme,
  WithStyles
} from "@material-ui/core/styles";
import * as Mat from "@material-ui/core";
import * as Icon from "@material-ui/icons";

const styles = (theme: Theme) =>
  createStyles({
    appBar: {
      position: "relative"
    },
    grow: {
      flexGrow: 1,
      marginLeft: 8
    }
  });

function Transition(props: any) {
  return <Mat.Slide direction="up" {...props} />;
}

type Props = React.ComponentProps<typeof Mat.Dialog> &
  WithStyles<typeof styles> & {
    title: string;
    description: string;
    onChangeText?: NonNullable<
      React.ComponentProps<typeof Mat.TextField>["onChange"]
    >;
    onSaveButtonClick?: () => void;
  };

const AddDialog = ({
  classes,
  title,
  description,
  onChangeText,
  onSaveButtonClick,
  ...props
}: Props) => {
  return (
    <Mat.Dialog {...props} fullScreen TransitionComponent={Transition}>
      <Mat.AppBar className={classes.appBar}>
        <Mat.Toolbar>
          <Icon.Close onClick={props.onClose} />
          <Mat.Typography variant="h6" color="inherit" className={classes.grow}>
            日記を作成する
          </Mat.Typography>
        </Mat.Toolbar>
      </Mat.AppBar>
      <Mat.List>
        <Mat.ListItem button>
          <Mat.TextField
            fullWidth
            id="title"
            label="タイトル"
            value={title}
            onChange={onChangeText}
          />
        </Mat.ListItem>
        <Mat.ListItem button>
          <Mat.TextField
            fullWidth
            rowsMax="4"
            multiline
            id="description"
            label="詳細"
            value={description}
            onChange={onChangeText}
          />
        </Mat.ListItem>
        <Mat.ListItem button>
          <input type="file" accept=".jpg, .jpeg, .png" />
        </Mat.ListItem>
        <Mat.ListItem button>
          <Mat.Button
            onClick={onSaveButtonClick}
            color="primary"
            variant="contained"
            fullWidth
          >
            保存
          </Mat.Button>
        </Mat.ListItem>
      </Mat.List>
    </Mat.Dialog>
  );
};

export default withStyles(styles)(AddDialog);

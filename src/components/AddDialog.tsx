import React, { ChangeEvent } from "react";
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
    },
    label: {
      width: "100%",
      color: "#6C6C6C"
    }
  });

function Transition(props: any) {
  return <Mat.Slide direction="up" {...props} />;
}

type Props = React.ComponentProps<typeof Mat.Dialog> &
  WithStyles<typeof styles> & {
    title: string;
    description: string;
    img: string;
    onChangeText?: NonNullable<
      React.ComponentProps<typeof Mat.TextField>["onChange"]
    >;
    onSaveButtonClick?: () => void;
    changeImage?: (img: string) => void;
  };

const AddDialog = ({
  classes,
  title,
  description,
  img,
  onChangeText,
  onSaveButtonClick,
  changeImage,
  ...props
}: Props) => {
  const onChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent) => {
      if (event && event.target) {
        // @ts-ignore
        changeImage(event.target.result);
      }
    };
    if (event && event.target && event.target.files) {
      reader.readAsDataURL(event.target.files[0]);
    }
  };
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
        <Mat.ListItem>
          <label className={classes.label}>
            写真を選択
            <img src={img} width="100%" alt="select" />
            <input
              type="file"
              accept="image/*"
              onChange={onChangeImage}
              style={{ display: "none" }}
              capture="environment"
            />
          </label>
          <label className={classes.label}>
            写真を撮影する
            <img src={img} width="100%" alt="select" />
            <input
              type="file"
              accept="image/*"
              onChange={onChangeImage}
              style={{ display: "none" }}
              capture="environment"
            />
          </label>
          <label className={classes.label}>
            写真を撮影する(インカメラ)
            <img src={img} width="100%" alt="select" />
            <input
              type="file"
              accept="image/*"
              onChange={onChangeImage}
              style={{ display: "none" }}
              capture="user"
            />
          </label>
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

import * as React from "react";
import * as Mat from "@material-ui/core";
import { useDiaryByID } from "../diary";
import { RouteComponentProps } from "react-router-dom";

export default ({ match }: RouteComponentProps<{ id: string }>) => {
  const { id } = match.params;
  const diary = useDiaryByID(id);
  if (!diary) return <></>;
  return (
    <>
      <Mat.AppBar position="static">
        <Mat.Toolbar>
          <Mat.Typography variant="h6" color="inherit">
            Photo Diary
          </Mat.Typography>
        </Mat.Toolbar>
      </Mat.AppBar>
      {diary.title}
    </>
  );
};

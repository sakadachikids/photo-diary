import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Home as HomeIcon, ViewList } from "@material-ui/icons";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { PathName } from "./Routes";

export default withRouter(({ history }: RouteComponentProps) => {
  return (
    <>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          onClick={() => history.push(PathName.HOME)}
        />
        <BottomNavigationAction
          label="All"
          icon={<ViewList />}
          onClick={() => history.push(PathName.ALL)}
        />
      </BottomNavigation>
    </>
  );
});

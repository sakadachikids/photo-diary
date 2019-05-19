import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

export const ComponentWithRouter = withRouter(
  ({ history, location }: RouteComponentProps) => {
    return (
      <React.Fragment>
        {/* / に遷移 */}
        <button onClick={() => history.push("/")} />
        {/* 現在のパスを表示 */}
        <p>{location.pathname}</p>
      </React.Fragment>
    );
  }
);

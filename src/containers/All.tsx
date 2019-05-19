import React from "react";
import DiaryList from "../components/DiaryList";
import { useDiaryContext } from "../diary";

export default () => {
  const { diaries } = useDiaryContext();
  return (
    <React.Fragment>
      <DiaryList diaries={diaries} />
    </React.Fragment>
  );
};

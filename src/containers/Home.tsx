import React from "react";
import DiaryList from "../components/DiaryList";
import AddDiary from "./AddDiary";
import { useDiaryContext } from "../diary";

export default () => {
  const { diaries } = useDiaryContext();
  return (
    <React.Fragment>
      <DiaryList diaries={diaries} />
      <AddDiary />
    </React.Fragment>
  );
};

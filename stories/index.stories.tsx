import React from "react";

import { storiesOf } from "@storybook/react";

import AddIcon from "../src/components/AddIcon";
import DiaryList from "../src/components/DiaryList";
import DiaryListItem from "../src/components/DiaryListItem";
import AddDialog from "../src/components/AddDialog";

storiesOf("Diary", module).add("AddIcon", () => <AddIcon />);

storiesOf("Diary", module).add("DiaryList", () => (
  <DiaryList
    diaries={[
      {
        description: "description",
        id: "id",
        title: "title",
        img: require("../src/icon-192x192.png")
      }
    ]}
  />
));

storiesOf("Diary", module).add("DiaryListItem", () => (
  <DiaryListItem
    style={{ width: 300, height: 300 }}
    diary={{
      description: "description",
      id: "id",
      title: "title",
      img: require("../src/icon-192x192.png")
    }}
  />
));

storiesOf("Diary", module).add("AddDialog", () => (
  <AddDialog open title="title" description="description" />
));

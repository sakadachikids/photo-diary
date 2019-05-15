import React from "react";
import uuid from "uuid/v4";
import * as use from "react-use";
import AddIcon from "../components/AddIcon";
import AddDialog from "../components/AddDialog";
import { useDiaryContext } from "../diary";

const getInitialState = (): Diary => ({
  title: "",
  description: "",
  img: require("../assets/no_image.png"),
  id: uuid()
});

export default () => {
  const [editingDiary, editDiary] = React.useState(getInitialState());
  const [open, toggle] = use.useToggle(false);
  const { addDiary } = useDiaryContext();
  const onSaveButtonClick = React.useCallback(() => {
    toggle(false);
    addDiary(editingDiary);
  }, [addDiary, editingDiary, toggle]);
  const onChangeText = React.useCallback<
    NonNullable<React.ComponentProps<typeof AddDialog>["onChangeText"]>
  >(
    event => {
      event.persist();
      editDiary(prevState => ({
        ...prevState,
        [event.target.id]: event.target.value
      }));
    },
    [editDiary]
  );
  const changeImage = (img: string) => {
    editDiary(prevState => ({
      ...prevState,
      img: img
    }));
  };

  return (
    <React.Fragment>
      <AddIcon onClick={React.useCallback(() => toggle(true), [toggle])} />
      <AddDialog
        open={open}
        title={editingDiary.title}
        description={editingDiary.description}
        img={editingDiary.img}
        onChangeText={onChangeText}
        onClose={React.useCallback(() => toggle(false), [toggle])}
        onSaveButtonClick={onSaveButtonClick}
        changeImage={changeImage}
      />
    </React.Fragment>
  );
};

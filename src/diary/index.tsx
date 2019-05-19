import React, { useEffect } from "react";
import createUseContext from "constate";
import getDbInstance from "../getDbInstance";

const useDiary = () => {
  const [diaries, setDiaries] = React.useState<Diary[]>([]);

  const db = getDbInstance();

  React.useEffect(() => {
    (async () => {
      const collections = await db.collection("diaries").get();
      collections.forEach(doc => {
        setDiaries(prevState => [...prevState, doc.data() as Diary]);
      });
    })();
  }, [db]);

  const addDiary = (diary: Diary) => {
    db.collection("diaries")
      .doc(diary.id)
      .set({ ...diary });
    setDiaries(prevState => [...prevState, diary]);
  };
  return { diaries, addDiary };
};

export const useDiaryByID = (id: string): Diary | undefined => {
  const [diary, setDiary] = React.useState<Diary>();
  const db = getDbInstance();
  React.useEffect(() => {
    (async () => {
      const diary = await db
        .collection("diaries")
        .doc(id)
        .get();
      setDiary(diary.data() as Diary);
    })();
  });
  return diary;
};

export const useDiaryContext = createUseContext(useDiary);

export const DiaryProvider = (props: any) => {
  return (
    <div>
      <useDiaryContext.Provider {...props} />
    </div>
  );
};

import React from "react";
import createUseContext from "constate";

const useDiary = () => {
  const [diaries, setDiaries] = React.useState<Diary[]>([]);
  const addDiary = (diary: Diary) => {
    // TODO: サーバーにデータを投げる
    setDiaries(prevState => [...prevState, diary]);
  };
  return { diaries, addDiary };
};

export const useDiaryContext = createUseContext(useDiary);

export const DiaryProvider = (props: any) => {
  React.useEffect(() => {
    (async () => {
      // TODO: データをサーバーから取得する
    })();
  }, []);
  return (
    <div>
      <useDiaryContext.Provider {...props} />
    </div>
  );
};

import React from 'react'
import createUseContext from 'constate'
import getDbInstance from '../getDbInstance'

const useDiary = () => {
  const [diaries, setDiaries] = React.useState<Diary[]>([])

  const db = getDbInstance()

  React.useEffect(() => {
    ;(async () => {
      const collections = await db.collection('diaries').get()
      collections.forEach(doc => {
        setDiaries(prevState => [...prevState, doc.data() as Diary])
      })
    })()
  }, [db])

  const addDiary = (diary: Diary) => {
    db.collection('diaries').add(diary)
    setDiaries(prevState => [...prevState, diary])
  }
  return { diaries, addDiary }
}

export const useDiaryContext = createUseContext(useDiary)

export const DiaryProvider = (props: any) => {
  return (
    <div>
      <useDiaryContext.Provider {...props} />
    </div>
  )
}

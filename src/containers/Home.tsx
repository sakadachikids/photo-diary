import React from 'react'
import DiaryList from '../components/DiaryList'
import AddDiary from './AddDiary'
import { useDiaryContext } from '../diary'
import { useLocalStorage } from 'react-use'
import { initializeFCM } from '../getDbInstance'

export default () => {
  const { diaries } = useDiaryContext()

  const [user] = useLocalStorage('user', null)
  React.useEffect(() => {
    if (user) {
      initializeFCM(user)
    }
  }, [user])

  return (
    <React.Fragment>
      <React.Fragment>
        <DiaryList diaries={diaries} />
        <AddDiary />
      </React.Fragment>
    </React.Fragment>
  )
}

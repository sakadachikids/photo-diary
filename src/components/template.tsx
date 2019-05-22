import React from 'react'
import * as Mat from '@material-ui/core'
import * as Icon from '@material-ui/icons'

const styles = (theme: Mat.Theme) =>
  Mat.createStyles({
    // styleをここに書く
  })

type Props = Mat.WithStyles<typeof styles> & {
  // Componentのpropsの型をここに書く
}

export default Mat.withStyles(styles)((props: Props) => {
  return (
    <React.Fragment>
      {/* Componentをここに書く */
      /* 例: <Mat.Button /> */
      /* React.Fragmentは消してもOK */}
    </React.Fragment>
  )
})

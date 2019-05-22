import React from 'react'
import * as Mat from '@material-ui/core'
import * as Icon from '@material-ui/icons'

const styles = (theme: Mat.Theme) =>
  Mat.createStyles({
    fab: {
      position: 'fixed',
      bottom: theme.spacing.unit * 10,
      right: theme.spacing.unit * 2,
      color: 'white',
      zIndex: 2
    }
  })

type Props = Mat.WithStyles<typeof styles> &
  React.ComponentProps<typeof Mat.Fab>
export default Mat.withStyles(styles)(({ classes, ...props }: Props) => {
  return (
    <Mat.Fab {...props} color="secondary" size="medium" className={classes.fab}>
      <Icon.Add fontSize="large" />
    </Mat.Fab>
  )
})

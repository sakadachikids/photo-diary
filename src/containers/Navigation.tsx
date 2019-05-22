import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { Home as HomeIcon, ViewList } from '@material-ui/icons'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { PathName } from './Routes'
import {
  createStyles,
  withStyles,
  Theme,
  WithStyles
} from '@material-ui/core/styles'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: 0,
      width: '100%'
    }
  })

type Props = WithStyles<typeof styles> & RouteComponentProps

const Navigation = withRouter(({ history, location, classes }: Props) => {
  return (
    <>
      {location.pathname !== PathName.SIGN_IN && (
        <BottomNavigation showLabels className={classes.root}>
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
            onClick={() => history.push(PathName.HOME)}
          />
          <BottomNavigationAction
            label="All"
            icon={<ViewList />}
            onClick={() => history.push(PathName.ALL)}
          />
        </BottomNavigation>
      )}
    </>
  )
})

export default withStyles(styles)(Navigation)

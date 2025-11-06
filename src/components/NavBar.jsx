import { AppBar, Toolbar, Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          width: "100vw"
        }}
      >
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
      </Toolbar>
    </AppBar>
  )
}

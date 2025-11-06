import { Box } from '@mui/material'
import FormLogin from '../components/FormLogin'


export default function Home() {
  return (
  
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: 2
      }}
    >
      <FormLogin/>
    </Box>

  )
}

import { Box } from '@mui/material'
import FormLogin from '../components/FormLogin'
import FormLoginBg from '../components/FormLoginBg'


export default function Home() {
  return (
  
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      }}
    > 
        <FormLogin/>
        <FormLoginBg/>     
    </Box>

  )
}

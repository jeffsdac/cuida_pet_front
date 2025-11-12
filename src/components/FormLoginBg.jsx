import { Box } from "@mui/material";

export default function FormLoginBg(){

    return(
        <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundImage: `
          url('/public/images/login_background_image.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        filter: "brightness(0.85) contrast(1.1)",
        overflow: "hidden",
        boxShadow: 3,
      }}
    />
       
    )

}
import MenuNavegacao from "../components/MenuNavegacao";
import FootBar from "../components/FootBar";
import { Box, Container, Typography } from "@mui/material";

export default function Main() {
    return(
        <Box
            sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
            <MenuNavegacao/>
                <Container maxWidth="lg"
                >
                  <Typography variant="h1" color="initial">RESUMO</Typography>
                </Container>
            <FootBar></FootBar>
        </Box>
    )
}
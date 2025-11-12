import { Box, Button } from "@mui/material";

export default function MenuNavegacao(){
    return(
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around", 
                width: "100%",
                backgroundColor: "var(--bg-color)",
                height: "60px"
            }}
        >
        
            <Box
                sx={{
                    width: "200px",
                    height: "100%",
                    backgroundColor: "red"
                }}
            >
                LOGO
            </Box>


            <Box
                sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Box
                    component="span"
                    sx={{
                        mx:4,
                        borderRadius: "10px",
                        display:"flex",
                        alignItems: "center",
                        fontSize: "1.25rem",
                        justifyContent: "center", 
                        color: "var(--text-color)",
                        "&:hover": {
                        cursor: "pointer",
                        color: "var(--textlink-color)"
                    },
                    }}
                >
                    HOME

                </Box>

                <Box
                    component="span"
                    sx={{
                        mx:4,
                        borderRadius: "10px",
                        display:"flex",
                        alignItems: "center",
                        fontSize: "1.25rem",
                        justifyContent: "center", 
                        color: "var(--text-color)",
                        "&:hover": {
                        cursor: "pointer",
                        color: "var(--textlink-color)"
                    },
                    }}
                >
                    FUNCIONARIOS

                </Box>

                <Box
                    component="span"
                    sx={{
                        mx:4,
                        borderRadius: "10px",
                        display:"flex",
                        alignItems: "center",
                        fontSize: "1.25rem",
                        justifyContent: "center", 
                        color: "var(--text-color)",
                        "&:hover": {
                        cursor: "pointer",
                        color: "var(--textlink-color)"
                    },
                    }}
                >
                    FATURAMENTO

                </Box>

                <Box
                    component="span"
                    sx={{
                        mx:4,
                        borderRadius: "10px",
                        display:"flex",
                        alignItems: "center",
                        fontSize: "1.25rem",
                        justifyContent: "center", 
                        color: "var(--text-color)",
                        "&:hover": {
                        cursor: "pointer",
                        color: "var(--textlink-color)"
                    },
                    }}
                >
                    AGENDA

                </Box>
                
                

            </Box>
            
            <Box
                sx={{
                    border: "1px solid orange",
                    height: "100%",
                    width: "55px",
                    borderRadius: "100%"
                }}
            >

            </Box>
        </Box>
    )
}
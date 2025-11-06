import { useState } from "react"
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material"
import { Visibility, VisibilityOff, Email, Lock } from "@mui/icons-material"

const theme = createTheme()

export default function FormLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = () => {
    
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Paper
          elevation={10}
          sx={{
            padding: 4,
            width: "100%",
            maxWidth: 400,
            borderRadius: 3,
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              sx={{
                textAlign: "center",
                fontWeight: 700,
                color: "#667eea",
                marginBottom: 1,
              }}
            >
              Bem-vindo
            </Typography>

            <Typography
              variant="body2"
              sx={{
                textAlign: "center",
                color: "text.secondary",
                marginBottom: 2,
              }}
            >
              Faça login para continuar
            </Typography>

            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email sx={{ color: "action.active" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#667eea",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#667eea",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#667eea",
                },
              }}
            />

            <TextField
              fullWidth
              label="Senha"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock sx={{ color: "action.active" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end" sx={{ color: "action.active" }}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#667eea",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#667eea",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#667eea",
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                padding: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                textTransform: "none",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                "&:hover": {
                  background: "linear-gradient(135deg, #5568d3 0%, #63408a 100%)",
                  transform: "translateY(-2px)",
                  boxShadow: 4,
                },
                transition: "all 0.3s ease",
              }}
            >
              Entrar
            </Button>

            <Typography
              variant="body2"
              sx={{
                textAlign: "center",
                color: "text.secondary",
                marginTop: 1,
              }}
            >
              Esqueceu sua senha?{" "}
              <Box
                component="span"
                sx={{
                  color: "#667eea",
                  cursor: "pointer",
                  fontWeight: 600,
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Recuperar
              </Box>
            </Typography>
        </Box>
        </Paper>
    </ThemeProvider>
    
  )
}

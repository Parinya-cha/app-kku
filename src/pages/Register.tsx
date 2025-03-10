import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import {Form, Alert,} from 'react-bootstrap';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  useNavigate();
  
  let navigate = useNavigate();
  
  const handleRegister = async () => {};


  return (
    <>
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            //color: "text.primary",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
          <img src="\icon\kku_logo_th\th\LogoKKU tha Traci.png" alt="Avatar" style={{ width: '100%' }} /> {/* ใช้รูปภาพ */}
          </Avatar>
          <Typography variant="h5">Register</Typography>
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 5, mb: 10, backgroundColor: '#c04000', color: 'white', '&:hover': {backgroundColor: '#c04000', color: 'white'
              }}}
              onClick={handleRegister}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">login</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Register;

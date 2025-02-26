import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const { data } = await axios.post("http://localhost:2002/api/admin/login", { email, password });
            localStorage.setItem("adminToken", data.token);
            navigate("/admin-dashboard");
        } catch (error) {
            alert("Invalid Credentials or Server Error");
        }
    };

    return (
        <Container maxWidth="xs">
            <Box p={4} display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h5">Admin Login</Typography>
                <TextField label="Email" fullWidth margin="normal" onChange={(e) => setEmail(e.target.value)} />
                <TextField label="Password" type="password" fullWidth margin="normal" onChange={(e) => setPassword(e.target.value)} />
                <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
                    Login
                </Button>
                <Typography variant="body2" mt={2}>
                    Don't have an account?{" "}
                    <Button color="secondary" onClick={() => navigate("/admin-register")}>
                        Register Here
                    </Button>
                </Typography>
            </Box>
        </Container>
    );
};

export default AdminLogin;

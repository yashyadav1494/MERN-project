import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import Swal from 'sweetalert2';


const AdminRegister = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            await axios.post("http://localhost:2002/api/admin/register", { username, email, password });
            //alert("Admin Registered Successfully!");

            //-----------------------------------------------------------------------------------
            Swal.fire({
                title: "Success!",
                text: "Admin Registered Successfully!",
                icon: "success",
                confirmButtonText: "OK",
                confirmButtonColor: "#3085d6",
                background: "#fefefe",
                color: "#333",
                timer: 3000, // Auto-close after 3 seconds
                showClass: {
                  popup: "animate__animated animate__fadeInDown"
                },
                hideClass: {
                  popup: "animate__animated animate__fadeOutUp"
                }
              });
              
            //----------------------------------------------------------------------------------
            navigate("/admin-login");
        } catch (error) {
            alert("Registration Failed");
        }
    };

    return (
        <Container maxWidth="xs">
            <Box p={4} display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h5">Admin Registration</Typography>
                <TextField label="Username" fullWidth margin="normal" onChange={(e) => setUsername(e.target.value)} />
                <TextField label="Email" fullWidth margin="normal" onChange={(e) => setEmail(e.target.value)} />
                <TextField label="Password" type="password" fullWidth margin="normal" onChange={(e) => setPassword(e.target.value)} />
                <Button variant="contained" color="primary" fullWidth onClick={handleRegister}>
                    Register
                </Button>
            </Box>
        </Container>
    );
};

export default AdminRegister;

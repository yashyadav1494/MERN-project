

import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, Typography, Grid, Button, Box, Paper } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const AdminDashboard = () => {
    const [stats, setStats] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const token = localStorage.getItem('adminToken');
                const { data } = await axios.get('http://localhost:2002/api/admin/dashboard', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setStats(data);
                setLoading(false);
            } catch (error) {
                console.error("Access denied", error);
                navigate('/admin-login'); // Redirect to login if unauthorized
            }
        };

        fetchStats();
    }, [navigate]);

    if (loading) return <Typography variant="h5" align="center">Loading dashboard...</Typography>;

    return (
        <Box p={4}>
            {/* Header Section */}
            <Typography variant="h3" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#2C3E50' }}>Admin Dashboard</Typography>

            {/* Stats Grid */}
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={4}>
                    <Card variant="outlined" sx={{ boxShadow: 3 }}>
                        <CardContent>
                            <Typography variant="h6" align="center" color="textSecondary">Total Orders</Typography>
                            <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', color: '#27ae60' }}>{stats.totalOrders}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card variant="outlined" sx={{ boxShadow: 3 }}>
                        <CardContent>
                            <Typography variant="h6" align="center" color="textSecondary">Total Users</Typography>
                            <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', color: '#2980b9' }}>{stats.totalUsers}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card variant="outlined" sx={{ boxShadow: 3 }}>
                        <CardContent>
                            <Typography variant="h6" align="center" color="textSecondary">Total Revenue</Typography>
                            <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', color: '#f39c12' }}>${stats.totalRevenue}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Orders Overview Chart */}
            <Box mt={4} p={3} bgcolor="background.paper" borderRadius="8px" boxShadow={2}>
                <Typography variant="h5" mb={2} sx={{ fontWeight: 'bold' }}>Orders Overview</Typography>
                <BarChart width={700} height={400} data={stats.orderStats}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="orders" fill="#82ca9d" />
                </BarChart>
            </Box>

            {/* Add New Product and Food Buttons */}
            <Box mt={5} display="flex" justifyContent="center" gap={2}>
                <Link to="/newadd">
                    <Button variant="contained" color="success" size="large" sx={{ fontWeight: 'bold', borderRadius: '8px' }}>
                        Add New Product In Bulk Section
                    </Button>
                </Link>
                <Link to="/add-food">
                    <Button variant="contained" color="success" size="large" sx={{ fontWeight: 'bold', borderRadius: '8px' }}>
                        Add New Food In Cart Section
                    </Button>
                </Link>
            </Box>

            {/* Logout Button */}
            <Box mt={4} display="flex" justifyContent="center">
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{ mt: 3, fontWeight: 'bold', borderRadius: '8px', width: '200px' }}
                    onClick={() => {
                        localStorage.removeItem('adminToken');
                        navigate('/admin-login');
                    }}
                >
                    Logout
                </Button>
            </Box>
        </Box>
    );
};

export default AdminDashboard;


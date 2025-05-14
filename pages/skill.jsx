import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import {
    FaJsSquare,
    FaReact,
    FaPython,
    FaDatabase,
    FaChartLine,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaLinux,
    FaChartBar,
    FaBrain,
    FaCuttlefish,
    FaCode,
} from 'react-icons/fa';

const skills = [
    { name: 'JavaScript', icon: <FaJsSquare size={32} color="#f0db4f" /> },
    { name: 'React', icon: <FaReact size={32} color="#61DBFB" /> },
    { name: 'Python', icon: <FaPython size={32} color="#306998" /> },
    { name: 'SQL', icon: <FaDatabase size={32} color="#00758f" /> },
    { name: 'C', icon: <FaCode size={32} color="#5A5A5A" /> },
    { name: 'C++', icon: <FaCuttlefish size={32} color="#00599C" /> },
    { name: 'HTML', icon: <FaHtml5 size={32} color="#e34c26" /> },
    { name: 'CSS', icon: <FaCss3Alt size={32} color="#264de4" /> },
    { name: 'Git', icon: <FaGitAlt size={32} color="#f1502f" /> },
    { name: 'Operating System', icon: <FaLinux size={32} color="#000000" /> },
    { name: 'Data Science', icon: <FaChartBar size={32} color="#6a1b9a" /> },
    { name: 'AI / ML', icon: <FaBrain size={32} color="#9c27b0" /> },
    { name: 'D3.js', icon: <FaChartLine size={32} color="#f39c12" /> },
];

export default function SkillsPage() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: '#f5f5f5',
                p: 4,
            }}
        >
            <Typography variant="h4" textAlign="center" sx={{ mt: 4 }}>
                My Skills
            </Typography>
            <br></br>
            <br></br>
            <Grid
                container
                spacing={10}
                sx={{
                    flexGrow: 1,
                    maxWidth: '1000px',
                    justifyContent: 'center',
                }}
            >
                {skills.map((skill, index) => (
                    <Grid item xs={6} sm={4} md={3} key={index}>
                        <Paper
                            elevation={4}
                            sx={{
                                p: 3,
                                height: 'auto',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 3,
                                textAlign: 'center',
                                transition: 'transform 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                },
                            }}
                        >
                            {skill.icon}
                            <Typography variant="h6">{skill.name}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

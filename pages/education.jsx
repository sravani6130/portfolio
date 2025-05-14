import React from 'react';
import { Box, Typography, Grid, useMediaQuery } from '@mui/material';

const educationData = [
    {
        year: '2021',
        title: 'RedCherries School',
        location: 'Tirupati, Andhra Pradesh',
        description: 'CGPA: 10',
        color: '#f71171', // Yellow/Orange
    },
    {
        year: '2023',
        title: 'Rajiv Gandhi University of Knowledge and Technologies',
        location: 'Kadapa, Andhra Pradesh',
        description: 'Higher Secondary, CGPA: 9.9',
        color: '#7e57c2', // Purple
    },
    {
        year: 'Currently',
        title: 'International Institute of Information Technology, Hyderabad',
        location: 'Hyderabad, Telangana',
        description: 'Bachelor of Technology in Computer Science and Engineering',
        color: '#42a5f5', // Blue
    },
];

export default function EducationPage() {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Box sx={{ py: 6, px: 4, bgcolor: '#fff'  }}>
            <Typography variant="h4" textAlign="center" mb={6}>
                Education Timeline
            </Typography>
            <Grid
                container
                spacing={isMobile ? 4 : 6}
                justifyContent="center"
                alignItems="center"
                sx={{
                   mt:30    ,
                }}
            >
                {educationData.map((edu, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Box
                                sx={{
                                    border: `3px solid ${edu.color}`,
                                    color: edu.color,
                                    display: 'inline-block',
                                    padding: '8px 16px',
                                    borderRadius: '999px',
                                    fontWeight: 'bold',
                                    mb: 1,
                                }}
                            >
                                {edu.year}
                            </Box>
                            <Box
                                sx={{
                                    bgcolor: edu.color,
                                    height: 12,
                                    borderRadius: '6px',
                                    width: '100%',
                                    position: 'relative',
                                    mb: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '100%',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        width: 0,
                                        height: 0,
                                        borderLeft: '10px solid transparent',
                                        borderRight: '10px solid transparent',
                                        borderTop: `10px solid ${edu.color}`,
                                    }}
                                />
                            </Box>
                            <Typography variant="h6" fontWeight={600} mb={1}>
                                {edu.title}
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" mb={1}>
                                {edu.location}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {edu.description}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

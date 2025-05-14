import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

export default function AboutPage() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(to right, #f0f4ff, #ffffff)',
                py: { xs: 6, md: 12 },
                px: { xs: 3, md: 8 },
            }}
        >
            <Grid container spacing={6} alignItems="center">
                {/* Left - Text Content */}
                <Grid item xs={12} md={6}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: { xs: '2.5rem', md: '4rem' },
                            color: '#00004d',
                            mb: 2,
                        }}
                    >
                        About Me
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '1.1rem', md: '1.3rem' },
                            color: '#333333',
                            lineHeight: 1.8,
                            mb: 3,
                        }}
                    >
                        I’m someone who loves to move—on the dance floor, through code, and across new places. I work on AI and machine learning projects, with a deep interest in data science.
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '1.1rem', md: '1.3rem' },
                            color: '#333333',
                            lineHeight: 1.8,
                            mb: 3,
                        }}
                    >
                        I also love solo travel—wandering through quiet temples, enjoying good food, and finding peace in green hills and fresh air.
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '1.1rem', md: '1.3rem' },
                            color: '#333333',
                            lineHeight: 1.8,
                        }}
                    >
                        I recently picked up reading and didn’t expect to fall so hard for books—but now I’m hooked. Whether it’s dancing, coding, or discovering new stories, I’m always chasing what makes me feel alive.
                    </Typography>
                </Grid>

                {/* Right - Image */}
                
            </Grid>
        </Box>
    );
}

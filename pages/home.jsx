import React from 'react';
import Background from './Background';
import { Typography, Box, IconButton, Stack, Grid } from '@mui/material';
import { Linkedin, Github, Twitter, Send, Instagram, Codepen } from 'lucide-react';

export default function HomePage() {
    return (
        <Box position="relative" width="100%" height="100vh" overflow="hidden">
            {/* Background Effect - zIndex 0 */}
            <Box position="absolute" top={0} left={0} width="100%" height="100%" zIndex={0}>
                <Background />
            </Box>

            {/* Main Content Container */}
            <Grid
                container
                position="relative"
                zIndex={1}
                height="100%"
                px={{ xs: 3, md: 8 }}
                py={{ xs: 6, md: 12 }}
                alignItems="center"
            >
                {/* Text Content - Left Side */}
                <Grid item xs={12} md={6}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        sx={{ ml: { xs: 2, md: 5 } }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: { xs: '3rem', md: '5rem' },
                                color: '#00004d', // dark blue
                                mb: 2,
                            }}
                        >
                            Hi There,
                        </Typography>

                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: { xs: '2.5rem', md: '4rem' },
                                color: '#00004d',
                                mb: 4,
                            }}
                        >

                            I'm{' '}
                            <Box component="span" sx={{ color: '#ffcc00' ,fontFamily: '"Brush Script MT", cursive', }}>
                                Sravani
                            </Box>{' '}
                            Vijaykumar
                        </Typography>

                        <Stack direction="row" spacing={5} mt={4}>
                            <IconButton sx={{ bgcolor: 'black' }} href="https://www.linkedin.com/in/antati-sravani-92b6b5341/" target="_blank" aria-label="LinkedIn">
                                <Linkedin size={30} style={{ color: '#3b82f6' }} />
                            </IconButton>
                            <IconButton sx={{ bgcolor: 'black' }} href="https://github.com/sravani6130" target="_blank" aria-label="GitHub">
                                <Github size={30} style={{ color: '#ffffff' }} />
                            </IconButton>

                            <IconButton sx={{ bgcolor: 'black' }} href="mailto:a.sravanivijaykumar.6130@gmail.com"  target="_blank" aria-label="Send">
                                <Send size={30} style={{ color: '#3b82f6' }} />
                            </IconButton>
                            <IconButton sx={{ bgcolor: 'black' }} href="https://www.instagram.com/__sravani__6130/" target="_blank" aria-label="Instagram">
                                <Instagram size={30} style={{ color: '#ec4899' }} />
                            </IconButton>
                        </Stack>
                    </Box>
                </Grid>

                {/* Image Content - Right Side */}
                <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
                    <Box
                        sx={{
                            width: { xs: '300px', md: '500px' },
                            height: { xs: '300px', md: '500px' },
                            backgroundColor: '#ffcc00',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            boxShadow: '0px 0px 20px rgba(0,0,0,0.1)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            mt: { xs: 4, md: 0 },
                            ml:30
                        }}
                    >
                        <img
                            src="https://sravani6130.github.io/portfolio/profile.png"
                            alt="Profile"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
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
                            I'm Sravani Vijaykumar
                        </Typography>

                        <Stack direction="row" spacing={2} mt={4}>
                            <IconButton sx={{ bgcolor: 'black' }} href="#" aria-label="LinkedIn">
                                <Linkedin size={20} style={{ color: '#3b82f6' }} />
                            </IconButton>
                            <IconButton sx={{ bgcolor: 'black' }} href="#" aria-label="GitHub">
                                <Github size={20} style={{ color: '#ffffff' }} />
                            </IconButton>
                            <IconButton sx={{ bgcolor: 'black' }} href="#" aria-label="Twitter">
                                <Twitter size={20} style={{ color: '#60a5fa' }} />
                            </IconButton>
                            <IconButton sx={{ bgcolor: 'black' }} href="#" aria-label="Send">
                                <Send size={20} style={{ color: '#3b82f6' }} />
                            </IconButton>
                            <IconButton sx={{ bgcolor: 'black' }} href="#" aria-label="Instagram">
                                <Instagram size={20} style={{ color: '#ec4899' }} />
                            </IconButton>
                            <IconButton sx={{ bgcolor: 'black' }} href="#" aria-label="Codepen">
                                <Codepen size={20} style={{ color: '#ffffff' }} />
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
                            src="/profile.png"
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
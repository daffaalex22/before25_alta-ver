import Box from '@mui/system/Box'
import Grid from '@mui/material/Grid'
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import logoFooter from '../../assets/images/LOGO_Footer.png'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery';
import useWindowDimensions from '../../customHooks/useWindowDimension';
import { useEffect } from 'react';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
}));

const breakpoints = {
    xs: "0px",
    sm: "600px",
    md: "900px",
    lg: "1200px",
    xl: "1536px"
}

const Footer = () => {
    const { height, width } = useWindowDimensions();

    useEffect(() => {
        console.log("width: ", width)
    }, [width]);


    return (
        <Box
            sx={{
                minHeight: '29vh',
                backgroundColor: '#382E0B',
                margin: '25px 0 0 0'
            }}
        >
            <Container>
                <Grid container
                    spacing={3}
                    justifyContent="space-around"
                    p={1}
                    sx={{ height: '100%' }}
                >
                    <Grid
                        item
                        xs={12}
                        md={3}
                        container
                        justifyContent="center"
                    >
                        <img src={logoFooter} alt="Logo Before 25" style={{ height: '80%' }} />
                    </Grid>
                    <Grid
                        item
                        container
                        xs={4}
                        md={4}
                        spacing={5}
                        p={1}
                        sx={{ height: '100%' }}
                        justifyContent="start"
                    >
                        <Grid item xs={12} container justifyContent="center">
                            <Grid
                                item
                                xs={7}
                                container
                                justifyContent="start"
                            >
                                <Link
                                    variant="body2"
                                    textAlign="left"
                                    lineHeight="40px"
                                    display="block"
                                    sx={{ color: '#F8F5E2' }}
                                    target="_blank"
                                    href="https://www.google.com"
                                >
                                    Resources
                                </Link>
                            </Grid>
                            <Grid
                                item
                                xs={7}
                                container
                                justifyContent="start"
                            >
                                <Link
                                    variant="body2"
                                    textAlign="left"
                                    lineHeight="40px"
                                    display="block"
                                    sx={{ color: '#F8F5E2' }}
                                    target="_blank"
                                    href="https://www.google.com"
                                >
                                    FAQ
                                </Link>
                            </Grid>
                            <Grid
                                item
                                xs={7}
                                container
                                justifyContent="start"
                            >
                                <Link
                                    variant="body2"
                                    textAlign="left"
                                    lineHeight="40px"
                                    display="block"
                                    sx={{ color: '#F8F5E2' }}
                                    target="_blank"
                                    href="https://www.google.com"
                                >
                                    Contribute
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        xs={7}
                        md={5}
                        spacing={3}
                        p={1}
                        sx={{ height: '100%' }}
                        justifyContent="center"
                    >
                        <Grid item xs={7}>
                            <Box textAlign="right">
                                <IconButton target="_blank" href="https://www.instagram.com/beforeyouturn.25/">
                                    <Instagram sx={{ margin: "0 2px", fontSize: '35px', color: '#F8F5E2' }} />
                                </IconButton>
                                <IconButton target="_blank" href="https://www.linkedin.com/company/before-25/">
                                    <LinkedIn sx={{ margin: "0 0px", fontSize: '35px', color: '#F8F5E2' }} />
                                </IconButton>
                            </Box>
                        </Grid>
                        <Grid item xs={7}>
                            <Typography sx={{ color: '#F8F5E2', marginBottom: '30px' }} variant="body2" textAlign="right">
                                Copyright Before 25 ID. Designed by Before 25 ID.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Footer;
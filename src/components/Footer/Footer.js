import Box from '@mui/system/Box'
import Grid from '@mui/material/Grid'
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
}));

const Footer = () => {
    return (
        <Box
            sx={{
                height: '29vh',
                backgroundColor: '#C4C4C4',
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
                    <Grid item xs={3}>
                        <Item sx={{ textAlign: 'center' }}>Logo</Item>
                    </Grid>
                    <Grid
                        item
                        container
                        xs={4}
                        spacing={5}
                        p={1}
                        sx={{ height: '100%' }}
                    >
                        <Grid item xs={12}>
                            <Link
                                color="textPrimary"
                                variant="body2"
                                textAlign="left"
                                lineHeight="40px"
                                display="block"
                            >
                                Resources
                            </Link>
                            <Link
                                color="textPrimary"
                                variant="body2"
                                textAlign="left"
                                lineHeight="40px"
                                display="block"
                            >
                                FAQ
                            </Link>
                            <Link
                                color="textPrimary"
                                variant="body2"
                                textAlign="left"
                                lineHeight="40px"
                                display="block"
                            >
                                Contribute
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        xs={5}
                        spacing={3}
                        p={1}
                        sx={{ height: '100%' }}
                    >
                        <Grid item xs={12}>
                            <Box textAlign="right">
                                <Instagram sx={{ margin: "0 7px", color: 'black', fontSize: '35px' }} />
                                <LinkedIn sx={{ margin: "0 7px", color: 'black', fontSize: '35px' }} />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography color="textSecondary" variant="body2" textAlign="right">
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
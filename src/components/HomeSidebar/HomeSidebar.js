import { Link } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';

const HomeSidebar = () => {
    return (
        <Grid
            item
            xs={1}
        >
            <Grid
                container
                spacing={1}
                height="80%"
                direction="column"
                align="center"
            >
                <Grid item container
                    xs={12}
                    justifyContent="center"
                    alignItems="center"

                >
                    <Box
                        sx={{
                            position: 'fixed',
                            top: '40%',
                            left: '80%'
                        }}
                    >
                        <Link
                            href="#welcome"
                            sx={{
                                display: 'block',
                                margin: '10px 0'
                            }}
                        >
                            01
                        </Link>
                        <Link
                            href="#our-story"
                            sx={{
                                display: 'block',
                                margin: '10px 0'
                            }}
                        >
                            02
                        </Link>
                        <Link
                            href="#our-story"
                            sx={{
                                display: 'block',
                                margin: '10px 0'
                            }}
                        >
                            03
                        </Link>
                        <Link
                            href="#"
                            sx={{
                                display: 'block',
                                margin: '10px 0'
                            }}
                        >
                            04
                        </Link>
                        <Link
                            href="#"
                            sx={{
                                display: 'block',
                                margin: '10px 0'
                            }}
                        >
                            05
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default HomeSidebar;
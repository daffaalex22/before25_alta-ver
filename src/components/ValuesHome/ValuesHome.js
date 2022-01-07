import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const ValuesHome = () => {
    return (
        <Container
            sx={{
                marginTop: '300px',
                height: '90vh',
            }}
            id="values"
        >
            <Grid
                container
                spacing={3}
            >
                <Grid
                    item
                    xs={11}
                    container
                    spacing={3}
                >
                    Values
                </Grid>
            </Grid>
        </Container>

    );
}

export default ValuesHome;
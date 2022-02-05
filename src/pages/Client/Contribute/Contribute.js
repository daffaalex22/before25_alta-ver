import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from '@mui/material/Grid'
import sponsor from '../../../assets/images/sponsor.png'
import './Contribute.css'

const classes = {
    pageTitle: {
        fontSize: '88px',
        textAlign: 'left',
        fontStyle: 'italic',
        lineHeight: '96px',
        marginTop: '75px',
        marginBottom: '25px',
        color: '#F8F5E2',
    },
    squareBox: {
        border: '1px solid black',
        borderRadius: 0,
        textAlign: 'justify',
        padding: '25px 30px',
        backgroundColor: '#F8F5E2',
    },
    squareBoxText: {
        fontSize: '20px',
    }
}

const Contribute = () => {
    return (
        <Box sx={{
            marginTop: '17vh',
            marginBottom: '10vh'
        }}>
            <Typography variant="h1" fontWeight="bold" sx={classes.pageTitle} id="contribute-1" >
                Contribute
            </Typography>
            <Paper sx={classes.squareBox} elevation={2}>
                <Typography sx={classes.squareBoxText}>
                    Of course, our community is open for everyone's
                    contribution outside our volunteers. You can
                    contribute in many ways, and you may find the
                    information here (prepare a link maybe so they
                    can refer to it straight away?). We are very happy
                    for our contributors during these two years.
                    Without you, we won't be able to keep going and provide
                    all these programmes for youngsters.
                </Typography>
            </Paper>
            <Typography variant="h1" fontWeight="bold" sx={classes.pageTitle} id="contribute-2">
                How you can help?
            </Typography>
            <Paper sx={classes.squareBox} elevation={2}>
                <Typography sx={classes.squareBoxText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus gravida sapien,
                    fringilla cursus odio posuere non. Cras efficitur pretium eros, sed consequat est semper vitae.
                    Suspendisse condimentum ultrices egestas. Pellentesque posuere venenatis posuere. Ut interdum imperdiet ex,
                    vitae malesuada nibh interdum ut. Nullam tortor quam, blandit eget vehicula ac, bibendum ac lorem. In hac
                    habitasse platea dictumst. Morbi turpis nulla, dignissim sed eleifend eget, gravida tincidunt elit. In hac
                    habitasse platea dictumst. Quisque eleifend tellus condimentum, porttitor est sit amet, efficitur libero.
                </Typography>
            </Paper>
            <Typography variant="h1" fontWeight="bold" sx={classes.pageTitle} id="contribute-3">
                Previous Sponsors
            </Typography>
            <Paper sx={classes.squareBox} elevation={2}>
                <Grid container spacing={3} direction="row" justifyContent="space-around">
                    <Grid
                        item
                        lg={3}
                    >
                        <img src={sponsor} style={{ height: 'auto', width: '100%' }} />
                    </Grid>
                    <Grid
                        item
                        lg={3}
                    >
                        <img src={sponsor} style={{ height: 'auto', width: '100%' }} />
                    </Grid>
                    <Grid
                        item
                        lg={3}
                    >
                        <img src={sponsor} style={{ height: 'auto', width: '100%' }} />
                    </Grid>
                    <Grid
                        item
                        lg={3}
                    >
                        <img src={sponsor} style={{ height: 'auto', width: '100%' }} />
                    </Grid>
                    <Grid
                        item
                        lg={3}
                    >
                        <img src={sponsor} style={{ height: 'auto', width: '100%' }} />
                    </Grid>
                    <Grid
                        item
                        lg={3}
                    >
                        <img src={sponsor} style={{ height: 'auto', width: '100%' }} />
                    </Grid>
                    <Grid
                        item
                        lg={3}
                    >
                        <img src={sponsor} style={{ height: 'auto', width: '100%' }} />
                    </Grid>
                    <Grid
                        item
                        lg={3}
                    >
                        <img src={sponsor} style={{ height: 'auto', width: '100%' }} />
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

export default Contribute;
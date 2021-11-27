import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const dummyTitle = "The Looming mental Health Crisis"
const dummyPreview = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Iusto dolorum repudiandae explicabo repellendus commodi natus aliquid veniam omnis ipsum! Ut commodi quibusdam aperiam laborum suscipit enim?Nobis deleniti repudiandae at! Quidem ipsam quibusdam quos repellat cum magnam eius laboriosam, ad obcaecati.Distinctio nam ullam quod modi maxime fugit ut, dignissimos maiores sint architecto sunt atque pariatur, error obcaecati cupiditate eius."



const TitlePreview = () => {
    return (
        <Grid
            item
            xs={11}
            lg={5}
        >
            <Grid
                container
                spacing={2}
                sx={{
                    height: "80vh",
                    overflow: 'auto'
                }}
            >
                <Grid item
                    xs={12}
                    sx={{
                        marginBottom: "8%",
                        marginRight: '10px'
                    }}
                >
                    <TextField
                        fullWidth
                        label="Search Article"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            textAlign: 'left',
                            marginBottom: '10px',
                            marginRight: '10px'
                        }}
                        variant="h6"
                        component="p"
                        color="textPrimary"
                        border="1px solid black"
                        p="15px 20px"
                    >
                        {dummyTitle}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            textAlign: 'left',
                            marginBottom: '10px',
                            marginRight: '10px'
                        }}
                        variant="h6"
                        component="p"
                        color="textPrimary"
                        border="1px solid black"
                        p="15px 20px"
                    >
                        {dummyTitle}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            textAlign: 'left',
                            marginBottom: '10px',
                            marginRight: '10px'
                        }}
                        variant="h6"
                        component="p"
                        color="textPrimary"
                        border="1px solid black"
                        p="15px 20px"
                    >
                        {dummyTitle}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            textAlign: 'left',
                            marginBottom: '10px',
                            marginRight: '10px'
                        }}
                        variant="h6"
                        component="p"
                        color="textPrimary"
                        border="1px solid black"
                        p="15px 20px"
                    >
                        {dummyTitle}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            textAlign: 'left',
                            marginBottom: '10px',
                            marginRight: '10px'
                        }}
                        variant="h6"
                        component="p"
                        color="textPrimary"
                        border="1px solid black"
                        p="15px 20px"
                    >
                        {dummyTitle}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            textAlign: 'left',
                            marginBottom: '10px',
                            marginRight: '10px'
                        }}
                        variant="h6"
                        component="p"
                        color="textPrimary"
                        border="1px solid black"
                        p="15px 20px"
                    >
                        {dummyTitle}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            textAlign: 'left',
                            marginBottom: '10px',
                            marginRight: '10px'
                        }}
                        variant="h6"
                        component="p"
                        color="textPrimary"
                        border="1px solid black"
                        p="15px 20px"
                    >
                        {dummyTitle}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            textAlign: 'left',
                            marginBottom: '10px',
                            marginRight: '10px'
                        }}
                        variant="h6"
                        component="p"
                        color="textPrimary"
                        border="1px solid black"
                        p="15px 20px"
                    >
                        {dummyTitle}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default TitlePreview;
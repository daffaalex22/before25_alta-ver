import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import Paper from "@mui/material/Paper";

const dummyTitle = "The Looming mental Health Crisis"
const dummyPreview = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Iusto dolorum repudiandae explicabo repellendus commodi natus aliquid veniam omnis ipsum! Ut commodi quibusdam aperiam laborum suscipit enim?Nobis deleniti repudiandae at! Quidem ipsam quibusdam quos repellat cum magnam eius laboriosam, ad obcaecati.Distinctio nam ullam quod modi maxime fugit ut, dignissimos maiores sint architecto sunt atque pariatur, error obcaecati cupiditate eius."

const ArticlePreview = ({ setOnArticleDetails, setValue }) => {

    const navigate = useNavigate();

    const handleSeeMore = async () => {
        await setOnArticleDetails(true)
        setValue(4)
        console.log('See More')
    }

    return (
        <Grid item xs={11} lg={5}>
            <Grid
                container
                spacing={3}
                height="fit-content"
                direction="column"
                padding="30px 10px"
            >
                <Grid item xs={1}>
                    <Typography
                        sx={{
                            textAlign: 'left'
                        }}
                        variant="h6"
                        component="p"
                        color="textPrimary"
                    >
                        01
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography
                        sx={{
                            textAlign: 'justify'
                        }}
                        variant="h4"
                        component="p"
                        color="textPrimary"
                    >
                        {dummyTitle}
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={7}
                    sx={{
                        justifyContent: 'left'
                    }}
                >
                    <Box

                    >
                        <Paper>
                            <Typography
                                sx={{
                                    textAlign: 'justify'
                                }}
                                variant="body2"
                                color="textPrimary"
                                border="1px solid black"
                                p="30px"
                            >
                                {dummyPreview}
                            </Typography>
                        </Paper>
                        <Button
                            sx={{
                                marginLeft: 0,
                                textTransform: 'none',
                                marginTop: 5,
                                padding: '15px 40px'
                            }}
                            variant="contained"
                            onClick={handleSeeMore}
                        >
                            See More
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ArticlePreview;
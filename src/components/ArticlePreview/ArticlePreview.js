import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import Paper from "@mui/material/Paper";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const dummyTitle = "The Looming mental Health Crisis"
const dummyPreview = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Iusto dolorum repudiandae explicabo repellendus commodi natus aliquid veniam omnis ipsum! Ut commodi quibusdam aperiam laborum suscipit enim?Nobis deleniti repudiandae at! Quidem ipsam quibusdam quos repellat cum magnam eius laboriosam, ad obcaecati.Distinctio nam ullam quod modi maxime fugit ut, dignissimos maiores sint architecto sunt atque pariatur, error obcaecati cupiditate eius."

const classes = {
    btn: {
        marginLeft: 0,
        textTransform: 'none',
        marginTop: 5,
        padding: '15px 40px',
        borderRadius: 0,
        '&:hover': {
            backgroundColor: 'white',
            color: 'black',
            border: '1.5px solid black'
        }
    }
}

const ArticlePreview = ({ setOnArticleDetails, setValue, article }) => {

    const navigate = useNavigate();

    const handleSeeMore = async () => {
        await setOnArticleDetails(true)
        setValue(4)
        navigate('/resources/articles/' + article.id)
        console.log('See More')
    }

    return (
        <Grid
            item
            container
            xs={11}
            lg={5}
            spacing={3}
            height="fit-content"
            direction="column"
            padding="30px 30px"
            sx={{
                // height: '70vh'
            }}
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
                        textAlign: 'justify',
                        fontStyle: 'italic',
                        fontWeight: 900,
                    }}
                    variant="h4"
                    component="p"
                    color="textPrimary"
                >
                    {article?.title}
                </Typography>
            </Grid>
            <Grid
                item
                xs={7}
                sx={{
                    justifyContent: 'left'
                }}
            >
                <Paper sx={{

                }}>
                    <Typography
                        sx={{
                            textAlign: 'justify',
                            height: '40vh',
                            overflow: 'auto'
                        }}
                        variant="body2"
                        color="textPrimary"
                        border="1px solid black"
                        p="30px 30px"
                    >
                        <em>Written by {article?.author?.name}</em>
                        <br />
                        <br />
                        {ReactHtmlParser(article?.content?.slice(0, 520) + '....')}
                    </Typography>
                </Paper>
                <Button
                    sx={classes.btn}
                    variant="contained"
                    onClick={handleSeeMore}
                >
                    See More
                </Button>
            </Grid>
        </Grid>
    );
}

export default ArticlePreview;
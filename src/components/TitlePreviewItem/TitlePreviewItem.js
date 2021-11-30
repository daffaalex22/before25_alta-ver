import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

const TitlePreviewItem = ({ article, allLoading, setTitlePreviewed }) => {

    const handleClick = () => {
        setTitlePreviewed(article.title)
    }

    return (
        <Grid item xs={12} key={article.id}>
            <Paper sx={{
                marginBottom: '10px',
                marginRight: '15px'
            }}
            >
                <Typography
                    sx={{
                        textAlign: 'left',
                        fontWeight: 600,
                        fontStyle: 'italic'
                    }}
                    variant="h6"
                    component="p"
                    color="textPrimary"
                    border="1px solid black"
                    p="15px 20px"
                    onClick={handleClick}
                >
                    {!allLoading ? article.title : <Skeleton />}
                </Typography>
            </Paper>
        </Grid>
    );
}

export default TitlePreviewItem;
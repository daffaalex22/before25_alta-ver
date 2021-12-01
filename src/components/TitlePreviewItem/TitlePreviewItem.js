import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Button from '@mui/material/Button'

const TitlePreviewItem = ({ article, allLoading, setTitlePreviewed }) => {

    const handleClick = () => {
        setTitlePreviewed(article.title)
    }

    return (
        <Grid item xs={12} key={article.id}>
            <Paper sx={{
                marginBottom: '10px',
                marginRight: '15px',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    boxShadow: 6,
                    borderLeft: '30px solid black',
                    borderRadius: 0,
                    transition: 'all 0.2s ease-in-out'
                },

            }}
            >
                <Button
                    sx={{
                        width: '100%',
                        height: '100%',
                        padding: 0,
                        textTransform: 'none'
                    }}
                    onClick={handleClick}
                >
                    <Typography
                        sx={{
                            textAlign: 'left',
                            fontWeight: 600,
                            fontStyle: 'italic',
                            width: '100%',
                            height: '100%',
                            // margin: 0
                        }}
                        variant="h6"
                        component="p"
                        color="textPrimary"
                        border="1px solid black"
                        p="15px 20px"
                    >
                        {!allLoading ? article.title : <Skeleton />}
                    </Typography>
                </Button>
            </Paper>
        </Grid>
    );
}

export default TitlePreviewItem;
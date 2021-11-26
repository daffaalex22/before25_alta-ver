import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import MoreMenu from "../MoreMenu/MoreMenu";
import Button from '@mui/material/Button'


const classes = {
    title: {
        color: 'black',
        textAlign: 'left'
    },
    btn: {
        display: 'flex',
        justifyContent: 'start',
        textAlign: 'left',
        textTransform: 'none',
        padding: 0,
        width: '100%'
    }
}


const ArticleItem = ({ article, ubahArticle, handleDelete }) => {
    return (
        <Card elevation={2}>
            {/* <Button sx={classes.btn}> */}
            <CardHeader
                action={<MoreMenu
                    articleId={article.id}
                    ubahArticleRoot={ubahArticle}
                    handleDeleteList={handleDelete}
                />}
                title={
                    <Typography sx={classes.title} variant="h6" component="h4">
                        {article.title}
                    </Typography>
                }
            />
            {/* </Button> */}
            <Button sx={classes.btn}>
                <CardContent sx={{ horizontalAlign: 'start' }}>
                    <Typography variant="subtitle2">{article.category.name}</Typography>
                    <Typography variant="subtitle1">Written by {article.author.name}</Typography>
                </CardContent>
            </Button>

        </Card >
    );
}

export default ArticleItem;
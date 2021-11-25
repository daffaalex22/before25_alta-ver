import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import MoreMenu from "./MoreMenu";
import Button from '@mui/material/Button'


const classes = {
    link: {
        color: 'black',
    },
    btn: {
        textAlign: 'left',
        textTransform: 'none',
        padding: 0
    }
}


const ArticleItem = ({ article, handleEdit, ubahArticle }) => {
    return (
        <Button sx={classes.btn}>
            <Card elevation={2}>
                <CardHeader
                    action={<MoreMenu
                        articleId={article.id}
                        handleEditRoot={handleEdit}
                        ubahArticleRoot={ubahArticle}
                    />}
                    title={
                        <Typography sx={classes.link} variant="h6" component="h4">
                            {article.title}
                        </Typography>
                    }
                />
                <CardContent>
                    <Typography variant="subtitle2">{article.category.name}</Typography>
                    <Typography variant="subtitle1">Written by {article.author.name}</Typography>
                </CardContent>
            </Card>
        </Button>
    );
}

export default ArticleItem;
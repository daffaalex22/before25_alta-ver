import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import MoreMenu from "./MoreMenu";


const classes = {
    link: {
        color: 'black',
        '&:hover': {
            color: 'gray',
        }
    }
}


const ArticleItem = ({ article }) => {
    return (
        <Card elevation={2}>
            <CardHeader
                action={<MoreMenu />}
                title={`Written by ${article.author.name}`}
                subheader={article.category.name}
            />
            <Link to={`/articles/${article.id}`}>
                <CardContent>
                    <Typography sx={classes.link} variant="h5" component="h4">
                        {article.title}
                    </Typography>
                </CardContent>
            </Link>
        </Card>
    );
}

export default ArticleItem;
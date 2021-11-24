import { Link } from "react-router-dom";
import Container from '@mui/material/Container'
import Grid from "@mui/material/Grid";
import ArticleItem from "./ArticleItem";
import Button from "@mui/material/Button";


const ArticleList = ({ articleList }) => {
    return (
        <Container className="article-list">
            <Grid container spacing={3}>
                {articleList.map(article => (

                    <Grid item xs={12} md={6} lg={4} key={article.id} >
                        <ArticleItem article={article} />
                    </Grid>

                ))}
            </Grid>
        </Container >
    );
}

export default ArticleList;
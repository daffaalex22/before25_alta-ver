import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import TitlePreviewItem from "../TitlePreviewItem/TitlePreviewItem";
import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { GET_ALL_ARTICLES } from "../../gql/queries";

const ArticleRecom = () => {

    const [articleList, setArticleList] = useState([])

    const [variables, setVariables] = useState({
        variables: {
            "title": {
                "_iregex": ''
            },
            "catName": {},
            "authorName": {}
        }
    }
    );

    const {
        loading: allLoading,
        error: allError,
        data: allData,
        refetch: refetchAll
    } = useQuery(GET_ALL_ARTICLES, variables);

    useEffect(() => {
        if (allData) {
            setArticleList(allData?.before25_articles);
        }
    }, [allData])

    if (allError) return allError.message

    return (
        <Box
            sx={{
                marginTop: '100px'
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    marginBottom: '70px',
                    fontStyle: 'italic',
                    textDecoration: 'underline',
                    textDecorationThickness: '4px',
                    textUnderlineOffset: '8px',
                }}
            >
                More Articles
            </Typography>
            <Grid
                container
                columns={14}
                spacing={0}
                sx={{
                    marginBottom: '80px'
                }}
            >
                {

                    (articleList?.map((article) => (
                        <Grid
                            item
                            xs={14}
                            sm={7}
                            md={6}
                        >
                            <TitlePreviewItem
                                article={article}
                                allLoading={allLoading}
                            // setTitlePreviewed={setTitlePreviewed}
                            />
                        </Grid>
                    )))
                }
            </Grid>

        </Box>
    );
}

export default ArticleRecom;
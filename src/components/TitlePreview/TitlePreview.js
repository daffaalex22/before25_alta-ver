import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { GET_ALL_ARTICLES } from "../../gql/queries";
import { useQuery, useMutation } from "@apollo/client";
import { useState, useEffect } from "react";
import TitlePreviewItem from "../TitlePreviewItem/TitlePreviewItem";

const TitlePreview = ({ defaultArticleList, setTitlePreviewed }) => {
    const [searchInput, setSearchInput] = useState('')
    const [articleList, setArticleList] = useState([])
    // const [shownArticles, setShownArticles] = useState(defaultArticleList)

    const [variables, setVariables] = useState({
        variables: {
            "title": {
                "_iregex": ""
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

    // useEffect(() => {
    //     if (searchInput) {
    //         setShownArticles(articleList)
    //         console.log('input dianggat true')
    //     } else {
    //         setShownArticles(defaultArticleList)
    //         console.log('input dianggat false')
    //     }

    // }, [searchInput])

    // useEffect(() => {
    //     if (!searchInput) {
    //         setShownArticles(defaultArticleList)
    //         console.log('input dianggat false')
    //     }
    // }, [defaultArticleList])

    if (allError) return allError.message

    const handleInputChange = (e) => {
        setVariables({
            variables: {
                "title": {
                    "_iregex": e.target.value
                },
                "catName": {},
                "authorName": {}
            }
        })
        setSearchInput(e.target.value)
    }

    const handleBlur = (e) => {
        console.log('BLurred')
    }


    return (
        <>
            <Grid
                item
                container
                spacing={2}
                xs={11}
                lg={5}
            >
                <TextField
                    fullWidth
                    label="Search Article"
                    variant="filled"
                    value={searchInput}
                    sx={{
                        margin: 0,
                    }}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />
                <Box sx={{
                    height: "65vh",
                    width: "100%",
                    overflow: 'auto'
                }}>
                    {searchInput ? (articleList?.map((article) => (
                        <TitlePreviewItem
                            article={article}
                            allLoading={allLoading}
                            setTitlePreviewed={setTitlePreviewed}
                        />
                    ))) : (defaultArticleList?.map((article) => (
                        <TitlePreviewItem
                            article={article}
                            allLoading={allLoading}
                            setTitlePreviewed={setTitlePreviewed}
                        />
                    )))}
                </Box>
            </Grid>
        </>
    );
}

export default TitlePreview;
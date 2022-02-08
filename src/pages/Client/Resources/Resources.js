import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ArticlePreview from "../../../components/ArticlePreview/ArticlePreview";
import TitlePreview from "../../../components/TitlePreview/TitlePreview";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { Link } from "@mui/material";
import { GET_ALL_ARTICLES } from "../../../gql/queries";
import { useQuery, useMutation } from "@apollo/client";
import { useState, useEffect } from "react";

const Resources = ({ setOnArticleDetails, setValue }) => {
    const [titlePreviewed, setTitlePreviewed] = useState('')
    const [articleToPreview, setArticleToPreview] = useState([])
    const [articleToTitle, setArticleToTitle] = useState([])

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

    const [articleList, setArticleList] = useState([])

    useEffect(() => {
        if (allData) {
            setArticleList(allData?.before25_articles);

        }
    }, [allData])

    useEffect(() => {
        if (articleList) {
            setArticleToPreview(articleList[0])
        }
    }, [articleList])

    useEffect(() => {
        if (articleToPreview) {
            setArticleToTitle(articleList?.filter((article) => article.id != articleToPreview.id))
        }
    }, [articleToPreview])

    useEffect(() => {
        if (titlePreviewed) {
            setArticleToPreview(articleList?.find((article) => article.title === titlePreviewed))
        }
    }, [titlePreviewed])

    if (allError) return allError.message


    return (
        <Box
            className="resources"
            sx={{
                marginTop: '12vh',
                marginBottom: '6vh'
            }}
        >
            <Grid
                container
                spacing={2}
                justifyContent="center"
            >
                <ArticlePreview
                    setOnArticleDetails={setOnArticleDetails}
                    setValue={setValue}
                    article={articleToPreview}
                />
                <TitlePreview
                    defaultArticleList={articleToTitle}
                    setTitlePreviewed={setTitlePreviewed}
                // setVariablesResources={setVariables}
                />
                <Sidebar />
            </Grid >
        </Box >);
}

export default Resources;
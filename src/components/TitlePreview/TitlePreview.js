import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { GET_ALL_ARTICLES } from "../../gql/queries";
import { useQuery, useMutation } from "@apollo/client";
import { useState, useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";

const TitlePreview = () => {
    const [searchInput, setSearchInput] = useState('')
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

    const [articleList, setArticleList] = useState([])

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

    useEffect(() => {
        if (allData) {
            setArticleList(allData?.before25_articles);
        }
    }, [allData])

    if (allError) return allError.message

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
                        margin: '25px 0',
                    }}
                    onChange={handleInputChange}
                />
                <Box sx={{
                    height: "65vh",
                    width: "100%",
                    overflow: 'auto'
                }}>
                    {articleList.map((article) => (
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
                                >
                                    {!allLoading ? article.title : <Skeleton />}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Box>
            </Grid>
        </>
    );
}

export default TitlePreview;
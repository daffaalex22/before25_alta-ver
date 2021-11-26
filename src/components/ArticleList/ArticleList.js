import { Link } from "react-router-dom";
import Container from '@mui/material/Container';
import ArticleItem from "../ArticleItem/ArticleItem";
import Masonry from 'react-masonry-css';
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import DeleteDialog from "../DeleteDialog/DeleteDialog";
import SimpleSnackbar from "../Snackbar/Snackbar";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";

const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
};

const classes = {
    articleList: {
        marginTop: 10
    },
    searchBar: {
        width: '45%',
        marginBottom: 5,
    },
    filter: {
        width: '25%',
        marginBottom: 5,
    }
}

const ArticleList = ({ articleList, categoryList, authorList, editVariables, loadings, ubahArticle, handleDeleteRoot }) => {

    console.log(loadings)
    const [titleValue, setTitleValue] = useState('')
    const [catValue, setCatValue] = useState('')
    const [authorValue, setAuthorValue] = useState('')

    const [titleInputValue, setTitleInputValue] = useState('')
    const [catInputValue, setCatInputValue] = useState('')
    const [authorInputValue, setAuthorInputValue] = useState('')

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const [deleteID, setDeleteID] = useState(null)

    const handleOpenDeleteDialog = (notedDeleteID) => {
        setDeleteID(notedDeleteID)
        setOpenDeleteDialog(true);
    };

    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false);
        setDeleteID(null);
    };

    const handleOpenSnackbar = () => {
        handleDeleteRoot(deleteID)
        setOpenDeleteDialog(false);
        setOpenSnackbar(true);
        setDeleteID(null);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setDeleteID(null);
        setOpenSnackbar(false);
    };

    const articleOptions = articleList?.map((article) => {
        const articleOption = article.title
        return articleOption
    })
    const categoryOptions = categoryList?.map((category) => {
        const categoryOption = category.name
        return categoryOption
    })
    const authorOptions = authorList?.map((author) => {
        const authorOption = author.name
        return authorOption
    })

    useEffect(() => {
        if (catValue) {
            editVariables("", "", catValue)
        }
        if (authorValue) {
            editVariables("", authorValue, "")
            // setAuthorValue('')
        }
        if (titleInputValue) {
            editVariables(titleInputValue, "", "")
            // setTitleValue('')
        }
    }, [catValue, authorValue, titleInputValue])

    useEffect(() => {
        if (catValue && catInputValue) {
            setAuthorValue('')
            setAuthorInputValue('')
            setTitleValue('')
            setTitleInputValue('')
        }
    }, [catValue, catInputValue])

    useEffect(() => {
        if (authorValue && authorInputValue) {
            setCatValue('')
            setCatInputValue('')
            setTitleValue('')
            setTitleInputValue('')
        }
    }, [authorValue, authorInputValue])

    useEffect(() => {
        if (titleValue || titleInputValue) {
            setAuthorValue('')
            setAuthorInputValue('')
            setCatValue('')
            setCatInputValue('')
        }
    }, [titleValue, titleInputValue])

    const handleShowAll = () => {
        console.log('ShowAll')
        setTitleValue('')
        setCatValue('')
        setAuthorValue('')
        setTitleInputValue('')
        setCatInputValue('')
        setAuthorInputValue('')
        editVariables("", "", "")
    }

    const handleClearInput = () => {
        editVariables("", "", "")
    }

    const handleSelect = (val) => {
        console.log(val)
    }

    const loadingList = [1, 2, 3, 4, 5, 6];

    return (
        <Container className="article-list" sx={classes.articleList}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Autocomplete
                    disablePortal
                    clearOnBlur={false}
                    sx={classes.searchBar}
                    id="combo-box-demo"
                    options={articleOptions}
                    value={titleValue}
                    onChange={(event, value, reason) => {
                        setTitleValue(value)
                        if (reason === 'clear') handleClearInput();
                        if (reason === 'selectOption') handleSelect(value);
                        if (reason === 'blur' && !value) handleClearInput();
                    }}
                    inputValue={titleInputValue}
                    onInputChange={(event, value, reason) => {
                        setTitleInputValue(value)
                        if (reason === 'clear') handleClearInput();
                        if (reason === 'selectOption') handleSelect(value);
                        if (reason === 'blur' && !value) handleClearInput();
                    }}
                    renderInput={(params) => <TextField {...params} label="Search Article by Title" />}
                />

                <Autocomplete
                    disablePortal
                    sx={classes.filter}
                    // clearOnBlur
                    id="combo-box-demo"
                    options={categoryOptions}
                    value={catValue}
                    onChange={(event, value, reason) => {
                        setCatValue(value)
                        if (reason === 'clear') handleClearInput();
                    }}
                    inputValue={catInputValue}
                    onInputChange={(event, value, reason) => {
                        setCatInputValue(value)
                        if (reason === 'clear') handleClearInput();
                    }}
                    renderInput={(params) => <TextField {...params} label="Filter by Category" />}
                />

                <Autocomplete
                    disablePortal
                    sx={classes.filter}
                    id="combo-box-demo"
                    options={authorOptions}
                    value={authorValue}
                    onChange={(event, value, reason) => {
                        setAuthorValue(value)
                        if (reason === 'clear') handleClearInput();
                    }}
                    inputValue={authorInputValue}
                    onInputChange={(event, value, reason) => {
                        setAuthorInputValue(value)
                        if (reason === 'clear') handleClearInput();
                    }}
                    renderInput={(params) => <TextField {...params} label="Filter by Author" />}
                />

            </Box>
            <Button sx={{ marginBottom: 5 }} onClick={handleShowAll}>
                Show All
            </Button>
            {!loadings ? (
                <Masonry
                    breakpointCols={breakpointColumns}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {articleList.map(article => (
                        <div key={article.id}>
                            <ArticleItem
                                article={article}
                                ubahArticle={ubahArticle}
                                handleDelete={handleOpenDeleteDialog}
                            />
                        </div>
                    ))}
                </Masonry>
            ) : (
                <Masonry
                    breakpointCols={breakpointColumns}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {loadingList.map(load => (
                        <div key={load} >
                            <LoadingSkeleton />
                        </div>
                    ))}
                </Masonry>
            )
            }


            <DeleteDialog
                open={openDeleteDialog}
                handleClose={handleCloseDeleteDialog}
                handleOpenSnackbar={handleOpenSnackbar}
            />
            <SimpleSnackbar
                open={openSnackbar}
                handleClose={handleCloseSnackbar}
            />

        </Container >
    );
}

export default ArticleList;
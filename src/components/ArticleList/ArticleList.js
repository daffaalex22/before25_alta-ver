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

const ArticleList = ({ articleList, categoryList, authorList, editVariables, loadings, handleEdit, ubahArticle, handleDeleteRoot }) => {


    console.log(loadings)
    const [titleValue, setTitleValue] = useState('')
    const [catValue, setCatValue] = useState('')
    const [authorValue, setAuthorValue] = useState('')

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const [deleteID, setDeleteID] = useState(null)
    // const [deletingID, setDeletingID] = useState(null)

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
        const articleOption = {
            label: article.title,
            id: article.id,
            author: article.author.name,
            category: article.category.name
        }
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
            setCatValue("")
        }
        if (authorValue) {
            editVariables("", authorValue, "")
            setAuthorValue('')
        }
        if (titleValue) {
            editVariables(titleValue, "", "")
            setTitleValue('')
        }
    }, [catValue, authorValue, titleValue])

    const handleShowAll = async () => {
        console.log('ShowAll')
        await setTitleValue('')
        await setCatValue('')
        await setAuthorValue('')
        editVariables("", "", "")
    }

    return (
        <Container className="article-list" sx={classes.articleList}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Autocomplete
                    disablePortal
                    sx={classes.searchBar}
                    id="combo-box-demo"
                    options={articleOptions}
                    onChange={(event, values) => setTitleValue(values)}
                    renderInput={(params) => <TextField {...params} label="Search Article by Title" />}
                />

                <Autocomplete
                    disablePortal
                    sx={classes.filter}
                    clearOnBlur
                    id="combo-box-demo"
                    options={categoryOptions}
                    onChange={(event, values) => values ? setCatValue(values) : null}
                    renderInput={(params) => <TextField {...params} label="Filter by Category" />}
                />

                <Autocomplete
                    disablePortal
                    sx={classes.filter}
                    id="combo-box-demo"
                    options={authorOptions}
                    onChange={(event, values) => setAuthorValue(values)}
                    renderInput={(params) => <TextField {...params} label="Filter by Author" />}
                />

            </Box>
            <Button sx={{ marginBottom: 5 }} onClick={handleShowAll}>
                Show All
            </Button>
            {
                loadings &&
                <div className="">Loading...</div>
            }
            {
                !loadings &&
                <Masonry
                    breakpointCols={breakpointColumns}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {articleList.map(article => (
                        <div key={article.id} >
                            <ArticleItem
                                article={article}
                                handleEdit={handleEdit}
                                ubahArticle={ubahArticle}
                                handleDelete={handleOpenDeleteDialog}
                            />
                        </div>
                    ))}
                </Masonry>
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
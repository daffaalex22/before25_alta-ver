// import GET_ALL_ARTICLES from "../../../gqlQueries";
import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import ArticleList from "../../../components/ArticleList/ArticleList";
import HeaderAdmin from "../../../components/HeaderAdmin/HeaderAdmin";
import { gql } from "@apollo/client"
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Container } from "@mui/material";
import { Popover } from "@mui/material";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router";

const HomeAdmin = ({ articleList, categoryList, authorList, editVariables, allLoading, handleEdit, ubahArticle }) => {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <>
            <Container className="home-admin">
                <HeaderAdmin />
                <ArticleList
                    handleEdit={handleEdit}
                    ubahArticle={ubahArticle}
                    articleList={articleList}
                    authorList={authorList}
                    categoryList={categoryList}
                    editVariables={editVariables}
                    loadings={allLoading}
                />
            </Container >
            <Fab
                color="primary"
                aria-label="add"
                sx={{
                    margin: 0,
                    position: 'fixed',
                    top: '85%',
                    left: '78%',
                    width: '75px',
                    height: '75px'
                }}
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                onClick={() => navigate('/add-article')}
            >
                <AddIcon />
            </Fab>
            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 0,
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 42,
                    horizontal: 'center',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography sx={{ p: 1 }}>Add an Article</Typography>
            </Popover>
        </>
    );
}

export default HomeAdmin;
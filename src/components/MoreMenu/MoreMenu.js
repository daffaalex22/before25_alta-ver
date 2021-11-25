import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const classes = {
    link: {
        textDecoration: 'none',
        color: 'black',
        display: 'inline'
    }
}

const MoreMenu = ({ articleId, handleEditRoot, ubahArticleRoot, handleDeleteList }) => {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleEdit = () => {
        setAnchorEl(null);
        console.log('Edit')
        navigate('/articles/' + articleId)
    }

    const handleDelete = () => {
        setAnchorEl(null);
        handleDeleteList(articleId)
        console.log('Delete')
    }

    return (
        <div>
            <IconButton
                id="demo-positioned-button"
                aria-controls="demo-positioned-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MoreVertIcon></MoreVertIcon>
            </IconButton>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleEdit}>
                    <ListItemIcon><EditIcon /></ListItemIcon>
                    <ListItemText primary="Edit" sx={classes.link} />
                </MenuItem>
                <MenuItem onClick={handleDelete}>
                    <ListItemIcon><DeleteForeverIcon /></ListItemIcon>
                    <ListItemText primary="Delete" sx={classes.link} />
                </MenuItem>
            </Menu>
        </div>
    );
}

export default MoreMenu;
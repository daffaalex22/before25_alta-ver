import './HeaderAdmin.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';

const HeaderAdmin = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/admin')
    }

    return (
        <Box sx={{ flexGrow: 1, height: 5 }}>
            <AppBar position="fixed" color="primary" sx={{ padding: 1 }}>
                <Toolbar variant="dense">
                    <Button color="inherit" sx={{ textTransform: 'none' }} onClick={handleClick}>
                        <Typography variant="h6" color="inherit" component="div">
                            Admin B25
                        </Typography>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default HeaderAdmin;
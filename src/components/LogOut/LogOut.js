import Button from '@mui/material/Button'
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router';

const LogOut = () => {
    const { logout } = useAuth()
    const navigate = useNavigate()

    const handleClick = () => {
        logout()
            .then(() => {
                navigate('/admin/login')
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return (
        <Button
            color="inherit"
            sx={{
                display: 'inline',
                width: '10%'
            }}
            onClick={handleClick}
        >
            Log Out
        </Button>
    );
}

export default LogOut;
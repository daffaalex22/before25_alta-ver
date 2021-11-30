import { Box } from "@mui/system";
import Container from '@mui/material/Container'
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Container>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
            >
                <Grid item container
                    xs={12}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                >
                    <Paper sx={{
                        width: '100%',
                        maxWidth: '600px',
                        height: 'auto',
                        margin: '25vh 100px',
                    }}
                    >
                        <Box sx={{ padding: '30px', textAlign: 'center' }}>
                            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '40px' }}>
                                Sign In
                            </Typography>
                            <br />
                            <form noValidate>
                                <TextField
                                    label="Email"
                                    sx={{
                                        width: '90%',
                                        marginBottom: '30px'
                                    }}
                                    variant="filled"
                                    type="email"
                                    inputRef={emailRef}
                                />
                                <FormControl
                                    sx={{
                                        width: '90%',
                                        marginBottom: '30px'
                                    }}
                                    variant="outlined"
                                >
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <FilledInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        // value={values.password}
                                        // onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                        inputRef={passwordRef}
                                    />
                                </FormControl>
                                <br />
                                <Button
                                    sx={{
                                        width: '90%',
                                        marginBottom: '30px',
                                        padding: '10px'
                                    }}
                                    variant="contained"
                                    type="submit"
                                    disabled={loading}
                                >
                                    Sign In
                                </Button>
                            </form>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default LoginPage;
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Contacts = () => {
    return (
        <Container
            sx={{
                marginTop: '250px'
            }}
        >
            <Typography
                sx={{
                    marginTop: '20px'
                }}
                variant="h6"
                fontWeight="regular"
            >
                <b>Email</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; beforeduapuluhlima@gmail.com
            </Typography>
            <Typography
                sx={{
                    marginTop: '20px'
                }}
                variant="h6"
                fontWeight="regular"
            >
                <b>Phone</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0812-3456-7890
            </Typography>
            <Typography
                sx={{
                    marginTop: '20px'
                }}
                variant="h6"
                fontWeight="regular"
            >
                <b>Instagram</b> &nbsp;&nbsp;&nbsp; @beforeyouturn.25
            </Typography>
            <Typography
                sx={{
                    marginTop: '20px'
                }}
                variant="h6"
                fontWeight="regular"
            >
                <b>LinkedIn</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; B25
            </Typography>
        </Container>
    );
}

export default Contacts;
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

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const dummyTitle = "The Looming mental Health Crisis"
const dummyPreview = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Iusto dolorum repudiandae explicabo repellendus commodi natus aliquid veniam omnis ipsum! Ut commodi quibusdam aperiam laborum suscipit enim?Nobis deleniti repudiandae at! Quidem ipsam quibusdam quos repellat cum magnam eius laboriosam, ad obcaecati.Distinctio nam ullam quod modi maxime fugit ut, dignissimos maiores sint architecto sunt atque pariatur, error obcaecati cupiditate eius."

const Resources = ({ setOnArticleDetails, setValue }) => {
    return (
        <Box
            className="resources"
            sx={{
                marginTop: '70px'
            }}
        >
            <Grid
                container
                spacing={4}
                justifyContent="space-between"
            >
                <ArticlePreview setOnArticleDetails={setOnArticleDetails} setValue={setValue} />
                <TitlePreview />
                <Grid
                    item
                    xs={1}
                    lg={2}
                >
                    <Grid
                        container
                        spacing={1}
                        height="80%"
                        direction="column"
                        align="center"
                    >
                        <Sidebar />
                    </Grid>
                </Grid>
            </Grid >
        </Box >);
}

export default Resources;
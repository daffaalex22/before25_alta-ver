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



const Resources = ({ setOnArticleDetails, setValue }) => {


    return (
        <Box
            className="resources"
            sx={{
                marginTop: '12vh',
                marginBottom: '6vh'
            }}
        >
            <Grid
                container
                spacing={3}
                justifyContent="space-between"
            >
                <ArticlePreview
                    setOnArticleDetails={setOnArticleDetails}
                    setValue={setValue}
                />
                <TitlePreview
                />
                <Sidebar />
            </Grid >
        </Box >);
}

export default Resources;
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TitlePreviewItem from "../TitlePreviewItem/TitlePreviewItem";

const TitlePreviewVideos = ({ event, videos, eventLoading, setTitlePreviewed }) => {
    return (
        <Grid
            item
            xs={4}
            container
            spacing={1}
        >
            <Grid
                item
                xs={12}
            >
                <Typography
                    sx={{
                        textAlign: 'justify',
                        fontStyle: 'italic',
                        fontWeight: 900,
                    }}
                    variant="h4"
                    component="p"
                    color="textPrimary"
                >
                    {event?.title}
                </Typography>
                <Typography
                    variant="h6"
                    color="textPrimary"
                    fontStyle="italic"
                >
                    {event?.subtitle}
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
            >
                <Box sx={{
                    paddingTop: '10px',
                    height: "71vh",
                    width: "100%",
                    overflow: 'auto',
                    marginTop: 0
                }}>
                    {videos?.map((video) => (
                        <TitlePreviewItem
                            article={video}
                            allLoading={eventLoading}
                            setTitlePreviewed={setTitlePreviewed}
                        />
                    ))}
                </Box>
            </Grid>
        </Grid>
    );
}

export default TitlePreviewVideos;
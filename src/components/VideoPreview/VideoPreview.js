import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import YouTube from 'react-youtube';

const VideoPreview = ({ video }) => {
    const opts = {
        height: '400px',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const onVideoReady = (e) => {
        // access to player in all event handlers via event.target
        e.target.pauseVideo();
    }


    return (
        <Grid
            item
            xs={7}
            container
            spacing={0}
        // sx={{
        //     height: '100%'
        // }}
        // direction="column"
        // justifyContent="center"
        >
            <Grid
                item
                xs={11}
                sx={{
                    height: 'max-content'
                }}
            >
                {video?.ytId ?
                    <YouTube
                        videoId={video?.ytId}
                        opts={opts}
                        onReady={onVideoReady}
                    />
                    :
                    null
                }
            </Grid>
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
                    {video?.title}
                </Typography>
                <Typography
                    variant="h6"
                    color="textPrimary"
                    fontStyle="italic"
                >
                    {video?.date}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default VideoPreview;
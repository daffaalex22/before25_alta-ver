import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container'
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useQuery, useMutation } from "@apollo/client";
import { useState, useEffect } from "react";
import { GET_ALL_ARTICLES, GET_EVENT_BY_ID } from "../../gql/queries";
import TitlePreviewVideos from '../TitlePreviewVideos/TitlePreviewVideos';
import VideoPreview from '../VideoPreview/VideoPreview'

const VideoResources = () => {

    const [titlePreviewed, setTitlePreviewed] = useState('');
    const [videoToPreview, setVideoToPreview] = useState([]);
    const [videoToTitle, setVideoToTitle] = useState([]);
    const [event, setEvent] = useState({});

    const [variables, setVariables] = useState({
        variables: {
            "id": 2
        }
    }
    );

    const {
        loading: eventLoading,
        error: eventError,
        data: eventData,
        refetch: refetchEvent
    } = useQuery(GET_EVENT_BY_ID, variables);

    const [videoList, setVideoList] = useState([])

    useEffect(() => {
        if (eventData) {
            setEvent(eventData?.before25_events_by_pk)
            setVideoList(eventData?.before25_events_by_pk?.videos);
        }
    }, [eventData])

    useEffect(() => {
        if (videoList) {
            setVideoToPreview(videoList[0])
        }
    }, [videoList])

    useEffect(() => {
        if (videoToPreview) {
            setVideoToTitle(videoList?.filter((video) => video.id != videoToPreview.id))
        }
    }, [videoToPreview])

    useEffect(() => {
        if (titlePreviewed) {
            setVideoToPreview(videoList?.find((video) => video.title === titlePreviewed))
        }
    }, [titlePreviewed])

    if (eventError) return eventError.message


    return (
        <Container>
            <Grid
                item
                xs={12}
                container
                spacing={2}
                justifyContent="center"
                sx={{
                    marginTop: '20%'
                }}
            >
                <Grid
                    item
                    xs={12}
                >
                    <Typography
                        sx={{
                            textAlign: 'left'
                        }}
                        variant="h6"
                        component="p"
                        color="textPrimary"
                    >
                        02
                    </Typography>
                </Grid>
                <TitlePreviewVideos
                    event={event}
                    videos={videoToTitle}
                    eventLoading={eventLoading}
                    setTitlePreviewed={setTitlePreviewed}
                />
                <VideoPreview
                    video={videoToPreview}
                />
            </Grid>
        </Container>
    );
}

export default VideoResources;
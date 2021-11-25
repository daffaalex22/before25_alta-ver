import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';

const variants = ['h1', 'h2', 'h6'];

function TypographyDemo(props) {
    const { loading = false } = props;

    return (
        <div>
            {variants.map((variant) => (
                <Typography component="div" key={variant} variant={variant}>
                    {loading ? <Skeleton width={'200%'} /> : null}
                </Typography>
            ))}
        </div>
    );
}

TypographyDemo.propTypes = {
    loading: PropTypes.bool,
};

export default function LoadingSkeleton() {
    return (
        <Grid container spacing={3}>
            <Grid item xs>
                <TypographyDemo loading />
            </Grid>
            <Grid item xs>
                <TypographyDemo />
            </Grid>
        </Grid>
    );
}
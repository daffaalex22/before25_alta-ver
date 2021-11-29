import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/system/Box';
import { lineHeight } from '@mui/system';

const classes = {
    pageTitle: {
        fontSize: '88px',
        textAlign: 'center',
        fontStyle: 'italic',
        lineHeight: '96px',
        marginBottom: '50px'
    },
    accordion: {
        marginBottom: '20px',
        borderRadius: 0,
        border: '1px solid black',
        padding: '10px 20px',
        '&:nth-child(2)': {
            borderRadius: 0
        },
        '&:last-child': {
            borderRadius: 0
        }
    },
    accordionDetails: {
        textAlign: 'justify'
    },
    accordionSummary: {
        fontStyle: 'italic',
        fontWeight: 900,
        fontSize: '1.7rem'
    }
}

const FAQ = () => {
    return (
        <Box sx={{
            marginTop: '17vh',
            marginBottom: '10vh'
        }}>
            <Typography sx={classes.pageTitle}>
                Frequently Asked Questions
            </Typography>
            <Accordion sx={classes.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h5" sx={classes.accordionSummary}>
                        Lorem ipsum dolor sit amet?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={classes.accordionDetails}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus gravida sapien,
                        fringilla cursus odio posuere non. Cras efficitur pretium eros, sed consequat est semper vitae.
                        Suspendisse condimentum ultrices egestas. Pellentesque posuere venenatis posuere. Ut interdum imperdiet ex,
                        vitae malesuada nibh interdum ut. Nullam tortor quam, blandit eget vehicula ac, bibendum ac lorem. In hac
                        habitasse platea dictumst. Morbi turpis nulla, dignissim sed eleifend eget, gravida tincidunt elit. In hac
                        habitasse platea dictumst. Quisque eleifend tellus condimentum, porttitor est sit amet, efficitur libero.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={classes.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h5" sx={classes.accordionSummary}>
                        Lorem ipsum dolor sit amet?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={classes.accordionDetails}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus gravida sapien,
                        fringilla cursus odio posuere non. Cras efficitur pretium eros, sed consequat est semper vitae.
                        Suspendisse condimentum ultrices egestas. Pellentesque posuere venenatis posuere. Ut interdum imperdiet ex,
                        vitae malesuada nibh interdum ut. Nullam tortor quam, blandit eget vehicula ac, bibendum ac lorem. In hac
                        habitasse platea dictumst. Morbi turpis nulla, dignissim sed eleifend eget, gravida tincidunt elit. In hac
                        habitasse platea dictumst. Quisque eleifend tellus condimentum, porttitor est sit amet, efficitur libero.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={classes.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography variant="h5" sx={classes.accordionSummary}>
                        Lorem ipsum dolor sit amet?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={classes.accordionDetails}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus gravida sapien,
                        fringilla cursus odio posuere non. Cras efficitur pretium eros, sed consequat est semper vitae.
                        Suspendisse condimentum ultrices egestas. Pellentesque posuere venenatis posuere. Ut interdum imperdiet ex,
                        vitae malesuada nibh interdum ut. Nullam tortor quam, blandit eget vehicula ac, bibendum ac lorem. In hac
                        habitasse platea dictumst. Morbi turpis nulla, dignissim sed eleifend eget, gravida tincidunt elit. In hac
                        habitasse platea dictumst. Quisque eleifend tellus condimentum, porttitor est sit amet, efficitur libero.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={classes.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography variant="h5" sx={classes.accordionSummary}>
                        Lorem ipsum dolor sit amet?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={classes.accordionDetails}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus gravida sapien,
                        fringilla cursus odio posuere non. Cras efficitur pretium eros, sed consequat est semper vitae.
                        Suspendisse condimentum ultrices egestas. Pellentesque posuere venenatis posuere. Ut interdum imperdiet ex,
                        vitae malesuada nibh interdum ut. Nullam tortor quam, blandit eget vehicula ac, bibendum ac lorem. In hac
                        habitasse platea dictumst. Morbi turpis nulla, dignissim sed eleifend eget, gravida tincidunt elit. In hac
                        habitasse platea dictumst. Quisque eleifend tellus condimentum, porttitor est sit amet, efficitur libero.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={classes.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography variant="h5" sx={classes.accordionSummary}>
                        Lorem ipsum dolor sit amet?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={classes.accordionDetails}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus gravida sapien,
                        fringilla cursus odio posuere non. Cras efficitur pretium eros, sed consequat est semper vitae.
                        Suspendisse condimentum ultrices egestas. Pellentesque posuere venenatis posuere. Ut interdum imperdiet ex,
                        vitae malesuada nibh interdum ut. Nullam tortor quam, blandit eget vehicula ac, bibendum ac lorem. In hac
                        habitasse platea dictumst. Morbi turpis nulla, dignissim sed eleifend eget, gravida tincidunt elit. In hac
                        habitasse platea dictumst. Quisque eleifend tellus condimentum, porttitor est sit amet, efficitur libero.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}

export default FAQ;
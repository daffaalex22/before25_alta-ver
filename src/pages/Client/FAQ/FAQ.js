import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import Container from '@mui/material/Container';
import { Link } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import './FAQ.css';
import bgFaq from '../../../assets/images/bg_faq.png'

const classes = {
    pageTitle: {
        fontSize: '88px',
        textAlign: 'center',
        fontStyle: 'italic',
        textDecoration: 'underline',
        textDecorationThickness: '3px',
        textUnderlineOffset: '8px',
        lineHeight: '96px',
        marginBottom: '50px',
        color: '#F8F5E2',
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
        },
        backgroundColor: '#F8F5E2'
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

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<AddIcon />}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(-45deg)',
    },
    '& .MuiAccordionSummary-expandIconWrapper': {
        color: 'black'
    }
}));

const FAQ = () => {
    return (
        <Container sx={{
            marginTop: '17vh',
            marginBottom: '10vh',
        }}>
            <Typography variant="h1" sx={classes.pageTitle} id="faq-title" fontWeight="bold" >
                Frequently Asked Questions
            </Typography>
            <Accordion sx={classes.accordion} >
                <AccordionSummary
                    expandIcon={<AddIcon />}
                    aria-controls="panel1a-content"
                >
                    <Typography variant="h5" sx={classes.accordionSummary}>
                        What is Before25?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={classes.accordionDetails}>
                        You can find it <Link>here</Link>.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={classes.accordion}>
                <AccordionSummary
                    expandIcon={<AddIcon />}
                    aria-controls="panel1a-content"
                >
                    <Typography variant="h5" sx={classes.accordionSummary}>
                        How can I reach out to your community?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={classes.accordionDetails}>
                        We have several social media and here is the info page directing you to the one that you like!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={classes.accordion}>
                <AccordionSummary
                    expandIcon={<AddIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography variant="h5" sx={classes.accordionSummary}>
                        How can I get involved in the community?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={classes.accordionDetails}>
                        There are several divisions for you to choose from; event, partnership, social media, graphic design, video design, and multimedia. Once we open our recruitment, you’ll get to check out the requirements for each division. Follow our social media so you won’t miss the news!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={classes.accordion}>
                <AccordionSummary
                    expandIcon={<AddIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography variant="h5" sx={classes.accordionSummary}>
                        How can I join the team?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={classes.accordionDetails}>
                        Our volunteer recruitment is currently closed. You can get more info on our instagram page when it is open.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={classes.accordion}>
                <AccordionSummary
                    expandIcon={<AddIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography variant="h5" sx={classes.accordionSummary}>
                        How long does the volunteer program go?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={classes.accordionDetails}>
                        It is usually going for around 8 - 9 months, can be longer or shorter, depending on what our team needs.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={classes.accordion}>
                <AccordionSummary
                    expandIcon={<AddIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography variant="h5" sx={classes.accordionSummary}>
                        Are there any requirements?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                        sx={{ ...classes.accordionDetails }}
                        variant="div"
                    >
                        <ul>
                            <li>You have to be under 25 years old</li>
                            <li>You have the passion to serve in this community</li>
                            <li>You are eager to learn something new</li>
                            <li>You want to bring a new perspective and be the light for the younger generation</li>
                            <li>You are flexible in terms of availability</li>
                            <li>You have a CV and a motivation letter</li>
                            <li>Last but not least, you are qualified to all the requirements in the division that you chose</li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={classes.accordion}>
                <AccordionSummary
                    expandIcon={<AddIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography variant="h5" sx={classes.accordionSummary}>
                        How can I contribute to this community?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={classes.accordionDetails}>
                        We have several divisions for you to choose, such as event, partnership, social media, graphic design, video design, and multimedia. Once we open our recruitment, you’ll get to check out the requirements for each division.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    );
}

export default FAQ;
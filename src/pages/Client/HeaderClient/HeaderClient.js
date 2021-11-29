import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Resources from '../Resources/Resources';
import ArticleDetailsClient from '../ArticleDetailsClient/ArticleDetailsClient'

const dimension = {
    navHeight: '10vh'
}

const classes = {
    tabs: {
        height: dimension.navHeight,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        position: 'fixed',
        backgroundColor: '#ffffff',
        width: '100%'
    },
    tab: {
        textTransform: 'none',
        fontSize: '18px',
        padding: '0 35px',
        backgroundColor: '#ffffff'
    },
    icon: {
        margin: '0 2%',
        fontSize: '2.2em',
        textAlign: 'right'
    },
    iconContainer: {
        justifySelf: 'flex-end',
        position: 'relative',
        top: '3px',
        marginLeft: '18vw'
    },

}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const HeaderClient = () => {
    const [value, setValue] = useState(0);
    const [onArticleDetails, setOnArticleDetails] = useState(false)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    };

    const handleClickTab = () => {
        setOnArticleDetails(false)
    }

    return (
        <Container>
            <Box sx={{ width: '100%' }}>
                <Box
                    sx={{
                        borderBottom: 1,
                        borderColor: 'divider',
                        height: '500',
                        width: '100%'
                    }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        sx={classes.tabs}
                    >
                        <Tab
                            label="Home"
                            {...a11yProps(0)}
                            sx={classes.tab}
                            onClick={() => setOnArticleDetails(false)}
                        />
                        <Tab
                            label="Resources"
                            {...a11yProps(1)}
                            sx={classes.tab}
                            onClick={() => setOnArticleDetails(false)}
                        />
                        <Tab
                            label="FAQ"
                            {...a11yProps(2)}
                            sx={classes.tab}
                            onClick={() => setOnArticleDetails(false)}
                        />
                        <Tab
                            label="Contribute"
                            {...a11yProps(3)}
                            sx={classes.tab}
                            onClick={() => setOnArticleDetails(false)}
                        />
                        {onArticleDetails && (
                            <Tab
                                label="Article"
                                {...a11yProps(4)}
                                sx={classes.tab}
                            />
                        )}
                        <Box sx={classes.iconContainer} justifySelf="end">
                            <Instagram sx={classes.icon} />
                            <LinkedIn sx={classes.icon} />
                        </Box>
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    HOME
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Resources
                        setOnArticleDetails={setOnArticleDetails}
                        setValue={setValue}
                    />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    FAQ
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Contribute
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <ArticleDetailsClient />
                </TabPanel>
            </Box>
        </Container >
    );
}

export default HeaderClient;
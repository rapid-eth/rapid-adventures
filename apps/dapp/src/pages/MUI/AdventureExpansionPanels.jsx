import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import adventures from '../../data/adventureList.json';
import { Card, CardHeader, CardMedia, CardContent, CardActions } from '@material-ui/core';

const ExpansionPanel = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiExpansionPanelDetails);

const useStyles = makeStyles(theme => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));
const AdventureExpansionPanels = () => {
    const classes = useStyles()
    const { alias: defaultPanelAlias } = adventures.data.length && adventures.data[0];
    const [expanded, setExpanded] = React.useState(defaultPanelAlias);

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            {adventures.data.map(({ alias, title, subtitle, summary, content, image, quests }) =>
                <div key={alias}>
                    <ExpansionPanel expanded={expanded === alias} onChange={handleChange(alias)}>
                        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography variant="h5" component="h2">{title}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <img src={image} alt={title} />
                            <Typography variant="subtitle1">
                                {subtitle}
                            </Typography>
                            <Paper>
                                {quests.length && quests.map((quest) => {
                                    const { properties: { title, subtitle, image, content }, reward, metadata } = quest;
                                    return (
                                        <Card>
                                            <CardHeader title={title} subheader={subtitle} />
                                            <CardMedia
                                                className={classes.media}
                                                image={image}
                                                title="Paella dish"
                                            />
                                            <CardContent>
                                                <Typography variant="subtitle1">
                                                    {content}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button>Go</Button>
                                            </CardActions>
                                        </Card>
                                    )
                                })}
                            </Paper>

                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            )}
        </div>
    );
}
export default AdventureExpansionPanels
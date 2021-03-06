import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 30,
    // opacity: 0.6,
    backgroundColor: theme.palette.background.default,
    zIndex: 10000,
    paddingTop: 6,
    // box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    // transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    // "-webkit-box-shadow": "0px 2px 3px 0px rgba(238,238,238,0.65)",
    // "-moz-box-shadow": "0px 2px 3px 0px rgba(238,238,238,0.65)",
    "box-shadow": "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
  }
}));

export default props => {
  const classes = useStyles();
  const { eventSession } = props;
  console.log(eventSession);
  if (
    eventSession.announcements &&
    eventSession.announcements.conference &&
    eventSession.announcements.conference.trim() !== ""
  ) {
    return (
      <div id="conference-container" className={classes.root}>
        <Typography align="center" variant="caption" display="block">
          {eventSession.announcements.conference}
          {/* After the speech, click on ‘Networking Room’ and network with fellow #CodeVsCovid19 hackathon attendees */}
        </Typography>
      </div>
    );
  }
  return null;
};

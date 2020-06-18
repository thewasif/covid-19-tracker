import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import { useStyles } from "./StyleCards";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const classes = useStyles();

  if (!confirmed) {
    return "Fetching data... please wait..";
  }

  return (
    <div className={classes.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          className={cx(classes.card, classes.infected)}
          xs={12}
          md={3}
        >
          <CardContent className={classes.cardContent}>
            <Typography
              variant="h5"
              color="textPrimary"
              gutterBottom
              className={classes.heading}
            >
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" className={classes.bottomText}>
              Number of active cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          className={cx(classes.card, classes.recovered)}
          xs={12}
          md={3}
        >
          <CardContent className={classes.cardContent}>
            <Typography
              variant="h5"
              color="textPrimary"
              gutterBottom
              className={classes.heading}
            >
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" className={classes.bottomText}>
              Number of recoveries from Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          className={cx(classes.card, classes.deaths)}
          xs={12}
          md={3}
        >
          <CardContent className={classes.cardContent}>
            <Typography
              variant="h5"
              color="textPrimary"
              gutterBottom
              className={classes.heading}
            >
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" className={classes.bottomText}>
              Number of deaths caused by Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;

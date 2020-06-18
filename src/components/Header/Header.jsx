import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./Style";

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Toolbar variant="dense" className={classes.typo}>
        <Typography variant="h4" color="inherit" className={classes.heading}>
          COVID-19 TRACKER
        </Typography>
        <Typography color="inherit" className={classes.para}>
          The Coronavirus (COVID-19) was first reported in Wuhan, China in
          December 2019, the outbreak was later recognized as a pandemic by the
          World Health Organization (WHO) on March 2020.
        </Typography>
      </Toolbar>
    </div>
  );
}

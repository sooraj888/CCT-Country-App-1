import { Card, CardMedia, makeStyles } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import React from "react";
import { useParams } from "react-router-dom";

const useStyle = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "40px",
  },
}));

const CountryDetails = () => {
  const classes: ClassNameMap = useStyle();
  const countryName: string | undefined = useParams().name;

  return (
    <Card className={classes.root}>
      <CardMedia component="img" src={""} alt="flag"></CardMedia>
    </Card>
  );
};

export default CountryDetails;

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "10px",
  },
  img: { border: "2px solid gray" },
  title: {
    padding: 0,
    fontSize: 16,
    fontWeight: "bolder",
    marginTop: "12px",
    color: "gray",
  },
  subTitle: {
    fontSize: "25px",
    fontWeight: "bold",
    paddingTop: "3px",
  },
  btn: {
    width: "100%",
  },
}));

const CountryDetailsCard = ({ data }: any) => {
  const classes: ClassNameMap = useStyles();

  const handleOnClick = () => {
    console.log("click");
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        component={"img"}
        className={classes.img}
        src={data?.flags?.png}
        alt="flag"
      ></CardMedia>
      <CardContent className={classes.title}>Country</CardContent>
      <CardContent className={classes.subTitle}>
        {data?.name?.common}
      </CardContent>
      <CardContent className={classes.title}>Capital</CardContent>
      <CardContent className={classes.subTitle}>{data?.capital}</CardContent>
      <CardContent className={classes.title}>Population</CardContent>
      <CardContent className={classes.subTitle}>{data?.population}</CardContent>
      <CardContent className={classes.title}>Lat-Lng</CardContent>
      <CardContent className={classes.subTitle}>
        {data?.latlng?.[0]}-{data?.latlng?.[1]}
      </CardContent>

      <Button
        variant={"contained"}
        className={classes.btn}
        color="primary"
        onClick={handleOnClick}
      >
        Capital Weather
      </Button>
    </Card>
  );
};

export default CountryDetailsCard;

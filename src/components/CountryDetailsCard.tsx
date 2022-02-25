import {
  Button,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import React, { useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import useApiFetch, { useApiFetchType } from "../hooks/useApiFetch";
import Error from "./../utility/Error";

const useStyles = makeStyles(() => ({
  root: {
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "10px",
  },
  root2: {
    marginTop: "100px",
    minWidth: "400px",
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
  rootweather: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  icon: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "10px",
  },
}));

const CountryDetailsCard = ({ countryData }: any): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  const weatherURL: string =
    "http://api.weatherstack.com/current?access_key=78ae6ba411469f63795fe8974e0e3a45&query=";

  const capitalName: string = countryData?.name?.common;

  const { data }: useApiFetchType = useApiFetch(weatherURL, capitalName);

  console.log(data);

  const [showWeatherData, setShowWeatherDadta] = useState<boolean>(false);

  const classes: ClassNameMap = useStyles();

  const handleOnClick = (): void => {
    setShowWeatherDadta(true);
  };

  const handleOnClickBackButton = (): void => {
    navigate("/");
  };

  return (
    <>
      {!showWeatherData ? (
        <Card className={classes.root}>
          <CardMedia
            component={"img"}
            className={classes.img}
            src={countryData?.flags?.png}
            alt="flag"
          ></CardMedia>
          <CardContent className={classes.title}>Country</CardContent>
          <CardContent className={classes.subTitle}>
            {countryData?.name?.common}
          </CardContent>
          <CardContent className={classes.title}>Capital</CardContent>
          <CardContent className={classes.subTitle}>
            {countryData?.capital}
          </CardContent>
          <CardContent className={classes.title}>Population</CardContent>
          <CardContent className={classes.subTitle}>
            {countryData?.population}
          </CardContent>
          <CardContent className={classes.title}>Lat-Lng</CardContent>
          <CardContent className={classes.subTitle}>
            {countryData?.latlng?.[0]}-{countryData?.latlng?.[1]}
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
      ) : (
        <>
          {data === "" ? (
            <Error />
          ) : (
            <Card className={classes.root2}>
              <div className={classes.rootweather}>
                <CardContent>
                  <Typography className={classes.title}>Location</Typography>
                  <Typography className={classes.subTitle}>
                    {data?.location?.name}
                  </Typography>
                  <Typography className={classes.title}>Temperature</Typography>
                  <Typography className={classes.subTitle}>
                    {data?.current?.temperature}
                  </Typography>
                </CardContent>
                <div className={classes.icon}>
                  <CardMedia
                    component="img"
                    image={data?.current?.weather_icons?.[0]}
                    alt="weather icon"
                  ></CardMedia>
                  <Typography className={classes.subTitle}>
                    {data?.current?.weather_descriptions[0]}
                  </Typography>
                </div>
              </div>

              <Button
                variant="contained"
                onClick={handleOnClickBackButton}
                color="primary"
                className={classes.btn}
              >
                Search another country
              </Button>
            </Card>
          )}
        </>
      )}
    </>
  );
};

export default CountryDetailsCard;

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useApiFetch, { useApiFetchType } from "../hooks/useApiFetch";
import CountryDetailsCard from "./../components/CountryDetailsCard";
import Error from "../utility/Error";

const useStyle = makeStyles(() => ({
  loading: {
    margin: "200px",
  },
}));

const CountryDetails = (): JSX.Element => {
  const countryURL = "https://restcountries.com/v3.1/name/";

  const classes: ClassNameMap = useStyle();
  const countryName: string | undefined = useParams().name;

  const { data, isLoading, error }: useApiFetchType = useApiFetch(
    countryURL,
    countryName
  );

  useEffect(() => {
    console.log(data?.[0]);
  }, [data]);

  return (
    <div>
      {error ? (
        <Error></Error>
      ) : isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="100px"></CircularProgress>
          <br />
          Loading
        </div>
      ) : (
        <CountryDetailsCard countryData={data?.[0]}></CountryDetailsCard>
      )}
    </div>
  );
};

export default CountryDetails;

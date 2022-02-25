import { Button, Card, CardContent } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { NavigateFunction, useNavigate } from "react-router-dom";

const useStlye = makeStyles(() => ({
  root: {
    alignItems: "cenetr",
    display: "flex",
    flexDirection: "column",
  },
}));

const Error = () => {
  const classes: ClassNameMap = useStlye();

  const navigate: NavigateFunction = useNavigate();
  const handleOnClick = (): void => {
    navigate("/");
  };

  return (
    <div className={classes.root}>
      <h1>Somthing Went Worng...</h1>
      <Button variant="contained" color="secondary" onClick={handleOnClick}>
        Retry
      </Button>
    </div>
  );
};

export default Error;

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";

const useStyles = makeStyles((theme) => ({
  backButton: {
    marginTop: "80px",
  },
  root: {
    margin: "20%",
  },
}));

const PageNotFound = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  const handleOnBackButton = (): void => {
    navigate("/");
  };

  const classes: ClassNameMap = useStyles();

  return (
    <div className={classes.root}>
      <p>Page Not Found</p>
      <Button
        className={classes.backButton}
        variant="contained"
        color={"primary"}
        onClick={handleOnBackButton}
      >
        Back
      </Button>
    </div>
  );
};

export default PageNotFound;

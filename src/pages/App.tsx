import React, { useEffect, useState } from "react";
import logo from "./logo.svg";

import { Box, Button, Card, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "400px",
    width: "400px",
  },
  input: {
    marginTop: "200px",
    padding: "20px",
    borderRadius: "20px",
    fontSize: "25px",
  },
  button: {
    margin: "20px",
    borderRadius: "10px",
    padding: "10px 20px",
  },
}));

function App() {
  const navigate = useNavigate();
  const [countryName, setCountryName] = useState("");
  const handleOnFormSubmit = (e: any) => {
    e.preventDefault();
    navigate(`/${countryName}`);
  };

  const classes: ClassNameMap = useStyles();

  const handleCountryInput = (e: any) => {
    setCountryName(e.target.value);
  };

  // useEffect(() => {
  //   console.log(countryName);
  // }, [countryName]);

  return (
    <Box
      component="form"
      onSubmit={handleOnFormSubmit}
      className={classes.root}
    >
      <input
        autoFocus={true}
        type={"text"}
        className={classes.input}
        required
        placeholder="Enter Country Name"
        value={countryName}
        onChange={handleCountryInput}
      ></input>
      <Button
        variant={"contained"}
        color={"primary"}
        type="submit"
        className={classes.button}
      >
        Submit
      </Button>
    </Box>
  );
}

export default App;

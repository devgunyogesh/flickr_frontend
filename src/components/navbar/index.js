import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

import constants from "../utils/constants";

const Navbar = ({ fetchData, setQuery, query }) => {
  return (
    <div className="navbar">
      {/* === Navbar UI === */}

      <TextField
        id="standard-with-placeholder"
        label="Search any tag"
        placeholder="eg Safe"
        margin="normal"
        onChange={event => setQuery(event.target.value)}
        value={query}
      />
      <Button
        variant="outlined"
        color="primary"
        onClick={event => {
          fetchData(`${constants.URL.PHOTOS},${query}`);
          event.preventDefault();
        }}
      >
        Search
      </Button>
    </div>
  );
};

Navbar.propTypes = {
  fetchData: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired
};

export default Navbar;

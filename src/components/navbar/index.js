import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Grid, InputBase, Typography } from "@material-ui/core";

import constants from "../utils/constants";

const Navbar = ({ fetchFlickrFeedItems }) => {
  const [query, setQuery] = useState("");

  return (
    <Grid className="card_cotainer navbar" container spacing={2}>
      <Grid item xs={12} sm={6} md={6}>
        {/* === Navbar UI === */}
        <Typography variant="h5" gutterBottom>
          Flickr API
        </Typography>
      </Grid>
      <Grid className="search" item xs={12} sm={6} md={6}>
        <InputBase
          placeholder="Search any tag eg Safe"
          className="input"
          onChange={event => setQuery(event.target.value)}
          value={query}
          inputProps={{ "aria-label": "Search Google Maps" }}
        />
        <Button
          variant="outlined"
          size="small"
          className="search_btn"
          onClick={event => {
            fetchFlickrFeedItems(
              constants.URL.PHOTOS,
              [],
              "search",
              `safe,${query}`
            );
            event.preventDefault();
          }}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

Navbar.propTypes = {
  fetchFlickrFeedItems: PropTypes.func.isRequired
};

export default Navbar;

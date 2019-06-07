import React, { useState, useEffect } from "react";
import JSONP from "jsonp";
import Grid from "@material-ui/core/Grid";

import constants from "../utils/constants";
import Navbar from "../navbar";
import FeedCard from "../feedCard";

const useDataApi = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async url => {
    setIsError(false);
    setIsLoading(true);

    try {
      await JSONP(url, { param: "jsoncallback" }, (e, json) => {
        console.log("JSOSN", json.items);
        setData(json.items);
      });
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(initialUrl);
  }, [initialUrl]);

  return { data, isLoading, isError, fetchData };
};

const FeedPage = () => {
  const [query, setQuery] = useState("");

  const { data, isLoading, isError, fetchData } = useDataApi(
    constants.URL.PHOTOS,
    []
  );

  return (
    <>
      {isError && <div>Something went wrong ...</div>}

      {isLoading && <div>Loading ...</div>}

      {/* === Navbar === */}
      <Navbar fetchData={fetchData} query={query} setQuery={setQuery} />

      {/* === Feeds === */}
      <Grid container spacing={2}>
        {data.map(card => (
          <FeedCard card={card} />
        ))}
      </Grid>
    </>
  );
};

export default FeedPage;

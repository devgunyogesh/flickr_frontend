import React from "react";
import Grid from "@material-ui/core/Grid";

import constants from "../utils/constants";
import Navbar from "../navbar";
import FeedCard from "../feedCard";
import useInfiniteScroll from "../utils/customHooks/useInfiniteScroll";
import useFlickrApi from "../utils/customHooks/useFlickrApi";

const FeedPage = () => {
  const { flickrItems, isLoading, isError, fetchFlickrItems } = useFlickrApi(
    constants.URL.PHOTOS,
    []
  );

  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreFlickrItems);

  function fetchMoreFlickrItems() {
    fetchFlickrItems(constants.URL.PHOTOS);
    setIsFetching(false);
  }

  return (
    <>
      {isError && <div>Something went wrong ...</div>}

      {isLoading && <div>Loading ...</div>}

      {/* === Navbar === */}
      <Navbar fetchFlickrItems={fetchFlickrItems} />

      {/* === Feeds === */}
      <Grid container spacing={2}>
        {flickrItems.map((card, index) => (
          <React.Fragment key={`mykey${index}`}>
            <FeedCard card={card} />
          </React.Fragment>
        ))}
      </Grid>

      {isFetching && "Wait while we fetch more items!"}
    </>
  );
};

export default FeedPage;

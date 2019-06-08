import React from "react";
import Grid from "@material-ui/core/Grid";

import constants from "../utils/constants";
import FeedCard from "../feedCard";
import loader from "../../assets/loader.gif";
import Navbar from "../navbar";
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
      <div className="infinite_loader">
        {isFetching && <img src={loader} alt="Wait while we load for you!" />}
      </div>
    </>
  );
};

export default FeedPage;

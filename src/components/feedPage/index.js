import React, { useRef, useEffect } from "react";
import { CircularProgress, Grid, Typography } from "@material-ui/core";

import FeedCard from "../feedCard";
import Navbar from "../navbar";
import constants from "../utils/constants";
import useFlickrApi from "../utils/customHooks/useFlickrApi";

const FeedPage = () => {
  const {
    flickrFeedItems,
    isLoadingFeed,
    isApiError,
    fetchFlickrFeedItems,
    isLoadingMore
  } = useFlickrApi(constants.URL.PHOTOS, [], "first", "safe");

  // === Intersection observer for infinite loading starts == //
  const loaderRef = useRef(null);
  const options = {
    root: null,
    rootMargin: "0%",
    threshold: 0
  };

  let callback = (entries, observerInstance) => {
    if (
      entries[0].intersectionRatio > 0 &&
      entries[0].target.getAttribute("data-item") === "fetch-feed"
    ) {
      observerInstance.unobserve(loaderRef.current);
      fetchFlickrFeedItems(
        constants.URL.PHOTOS,
        [...flickrFeedItems],
        "more",
        "safe"
      );
    }

    return;
  };

  let observer = new IntersectionObserver(callback, options);

  useEffect(() => {
    if (loaderRef.current && !isLoadingMore.triggered) {
      observer.observe(loaderRef.current);
    }
  });

  // === Intersection observer for infinite loading ends == //

  return (
    <>
      {/* === Navbar ===  */}
      <Navbar fetchFlickrFeedItems={fetchFlickrFeedItems} />

      {/* === API Error === */}
      {isApiError && <div>Please refresh the tab!</div>}

      {/* === Start loader as we fetch flickr feed items for first time or on new search === */}
      {isLoadingFeed && (
        <div className="app_loader">
          <CircularProgress color="secondary" />
        </div>
      )}

      {/* === Once loading feed stops display message if no flickr items there === */}
      {!isLoadingFeed && flickrFeedItems.length === 0 && (
        <Typography className="search_error" component="h5" variant="h5">
          Sorry! Nothing exists for your feed search.
        </Typography>
      )}

      {/* === Once loading feed stops display flickr items === */}
      {!isLoadingFeed && flickrFeedItems.length > 0 && (
        <Grid container spacing={3}>
          {flickrFeedItems.map((card, index) => (
            <React.Fragment key={`mykey${index}`}>
              <FeedCard card={card} />
            </React.Fragment>
          ))}
        </Grid>
      )}

      {/* === Add infinite loader container once feed loads and there are items in list === */}
      {!isLoadingFeed && flickrFeedItems.length > 0 && (
        <div ref={loaderRef} className="infinite_loader" data-item="fetch-feed">
          {/* === Display loader when container in view === */}
          {isLoadingMore.inLoadingMoreView && (
            <CircularProgress color="secondary" />
          )}
        </div>
      )}
    </>
  );
};

export default FeedPage;

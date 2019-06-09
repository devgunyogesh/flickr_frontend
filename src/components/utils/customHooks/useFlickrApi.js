import { useState, useEffect } from "react";
import JSONP from "jsonp";
import constants from "../constants";

const useFlickrApi = (initialUrl, initialData, fetchName, fetchQuery) => {
  let [flickrFeedItems, setFlickrFeedItems] = useState(initialData);
  const [isLoadingFeed, setIsLoadingFeed] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState({
    inLoadingMoreView: false,
    triggered: false
  });

  const [isApiError, setIsApiError] = useState(false);

  const fetchFlickrFeedItems = (url, data, name, query) => {
    //Not using url passed in arguments, but will keep in case if its different sometime.
    setIsApiError(false);

    (name === "first" || name === "search") && setIsLoadingFeed(true);
    name === "more" &&
      setIsLoadingMore({
        inLoadingMoreView: true,
        triggered: true
      });

    try {
      JSONP(
        `${constants.URL.PHOTOS}${query}`,
        { param: "jsoncallback" },
        (e, json) => {
          setFlickrFeedItems([...data, ...json.items]);
          (name === "first" || name === "search") && setIsLoadingFeed(false);
          name === "more" &&
            setIsLoadingMore({
              inLoadingMoreView: false,
              triggered: false
            });
        }
      );
    } catch (error) {
      setIsApiError(true);
    }
  };

  useEffect(() => {
    fetchFlickrFeedItems(initialUrl, initialData, fetchName, fetchQuery);
  }, [initialUrl]);

  return {
    flickrFeedItems,
    isLoadingFeed,
    isApiError,
    fetchFlickrFeedItems,
    isLoadingMore
  };
};

export default useFlickrApi;

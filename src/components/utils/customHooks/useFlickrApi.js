import { useState, useEffect } from "react";
import JSONP from "jsonp";

const useFlickrApi = (initialUrl, initialData) => {
  let [flickrItems, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchFlickrItems = async ( url, initialData ) => {
    setIsError(false);
    setIsLoading(true);

    //When new tag based search empty array.
    //when infinite scroll request retain flickrItems.
    flickrItems = initialData ?  [] : [...flickrItems];
    try {
      await JSONP(url, { param: "jsoncallback" }, (e, json) => {
        console.log("JSOSN", json.items);
        setData([...flickrItems, ...json.items]);
      });
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchFlickrItems(initialUrl, initialData);
  }, [initialUrl]);

  return { flickrItems, isLoading, isError, fetchFlickrItems };
};

export default useFlickrApi;

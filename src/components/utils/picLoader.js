import React from "react";
import ContentLoader from "react-content-loader";

const PicLoader = () => (
    <ContentLoader
      height={200}
      width={400}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="0" y="35" rx="5" ry="5" width="400" height="200" />
    </ContentLoader>
  );

  export default PicLoader;
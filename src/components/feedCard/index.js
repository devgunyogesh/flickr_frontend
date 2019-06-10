import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import {
  Card,
  CardContent,
  Grid,
  Fade,
  Typography,
  CardMedia
} from "@material-ui/core";
import PropTypes from "prop-types";

import PicLoader from "../utils/PicLoader";
import constants from "../utils/constants";
import useIntersectionObserver from "../utils/customHooks/useIntersectionObserver";

const FeedCard = ({ card }) => {
  const cardMediaRef = useRef(null);
  const { inCardView } = useIntersectionObserver(cardMediaRef, {
    threshold: 0
  });

  let { tags, description, author_id, media, title, url, link, author } = card;

  //Split card tags as they are in string.
  //Tags will be in an array to make them appear clickable and redirect to flickr page for that tag.
  tags = tags.split(" ");

  //Just need description HTML out of all HTML which includes author name, url to author profile, pic, url to pic, description.
  //html from string inovlves dangerouslySetInnerHTML property of react which is not recommended to use. As we need consistency
  //of break tage or href to any word so using this HTML by splitting.
  description = description.split("</p>")[2];

  //Just need author name
  author = author.split('"')[1];

  return (
    <>
      {/* === Feeds UI: Card based === */}
      <Fade in={true}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card_container">
            <div ref={cardMediaRef} data-item="fetch-images">
              {inCardView ? (
                <CardMedia className="card_pic" image={media.m} title={title} />
              ) : (
                <CardContent component={() => <PicLoader />} title={title} />
              )}
            </div>

            <CardContent>
              {/* Flickr user can be accessed either by author_id or by username. Below is through author_id */}
              <Typography href={url} component="h5" variant="h5">
                <a
                  className="card_link"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {title}
                </a>{" "}
                by{" "}
                <a
                  className="card_link"
                  href={`${constants.URL.PEOPLE}${author_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {author}
                </a>
              </Typography>

              <Typography
                className="card_desc"
                component="h6"
                variant="subtitle1"
              >
                <p dangerouslySetInnerHTML={{ __html: description }} />
              </Typography>
            </CardContent>

            {tags.map((item, index) => (
              <Button
                variant="outlined"
                className="tag_btn"
                key={`mykey${index}`}
                size="small"
              >
                {item}
              </Button>
            ))}
          </Card>
        </Grid>
      </Fade>
    </>
  );
};

FeedCard.propTypes = {
  card: PropTypes.object.isRequired,
};

export default FeedCard;

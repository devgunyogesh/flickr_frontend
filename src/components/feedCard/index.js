import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const FeedCard = ({ card }) => {
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
      <Grid key={author_id} item xs={12} sm={4}>
        <Card className="">
          <CardMedia className="card_pic" image={media.m} title={title} />
          <CardContent>
            {/* Flickr user can be accessed either by author_id or by username. Below is through author_id */}
            <Typography href={url} component="h5" variant="h5">
              <a href={link}>{title}</a> by{" "}
              <a href={"https://www.flickr.com/people/" + author_id}>
                {author}
              </a>
            </Typography>

            <Typography variant="subtitle1" color="textSecondary">
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </Typography>
          </CardContent>

          {tags.map(item => (
            <Button size="small" color="primary">
              {item}
            </Button>
          ))}
        </Card>
      </Grid>
    </>
  );
};

FeedCard.propTypes = {
  card: PropTypes.object.isRequired
};

export default FeedCard;

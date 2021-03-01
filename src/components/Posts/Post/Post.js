import React from "react";
import useStyle from "./Styles";
import ThumbUpAlt from "@material-ui/icons/ThumbUpAlt";
import Delete from "@material-ui/icons/Delete";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import { DeletePost, likePost } from "../../../action/posts";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";
import moment from "moment";
import { useDispatch } from "react-redux";

function Post({ post, setCurrentId }) {
  const classes = useStyle();
  const dispatch = useDispatch();
  return (
    <Card container className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => {
            setCurrentId(post._id);
          }}
        >
          <MoreHoriz fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="h6" color="textSecondary">
          {post.tags.map((eachTag) => `#${eachTag} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2">{post.message}</Typography>
        <Typography className={classes.title} variant="body2" gutterBottom>
          {post.messages}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            dispatch(likePost(post._id));
          }}
        >
          <ThumbUpAlt fontSize="small" />
          &nbsp; Like &nbsp; {post.likeCount}{" "}
        </Button>

        <Button
          size="small"
          color="primary"
          onClick={() => {
            dispatch(DeletePost(post._id));
          }}
        >
          <Delete fontSize="small" />{" "}
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;

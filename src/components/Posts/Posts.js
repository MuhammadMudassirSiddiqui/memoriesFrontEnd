import React from "react";
import Post from "./Post/Post";
import useStyle from "./Styles";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Posts({ setCurrentId }) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const classes = useStyle();
  // test
  console.log(posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid xs={12} sm={6} item key={post._id}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;

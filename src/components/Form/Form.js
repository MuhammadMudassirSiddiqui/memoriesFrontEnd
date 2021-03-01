import React, { useState, useEffect } from "react";
import useStyle from "./Styles";
import { Paper, TextField, Button, Typography } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost, UpdatePost } from "../../action/posts";
import { useSelector } from "react-redux";

function Form({ currentId, setCurrentId }) {
  const [PostData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const dispatch = useDispatch();
  const classes = useStyle();

  useEffect(() => {
    if (post)
      setPostData({
        creator: post.creator,
        title: post.title,
        message: post.message,
        tags: post.tags,
        selectedFile: post.selectedFile,
      });
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(UpdatePost(currentId, PostData));
    } else {
      dispatch(createPost(PostData));
    }
    clear();
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.form} ${classes.root}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Update a" : "Create a"} Memory
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={PostData.creator}
          onChange={(e) =>
            setPostData({ ...PostData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={PostData.title}
          onChange={(e) => setPostData({ ...PostData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={PostData.message}
          onChange={(e) =>
            setPostData({ ...PostData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={PostData.tags}
          onChange={(e) =>
            setPostData({ ...PostData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => {
              console.log(base64);
              setPostData({ ...PostData, selectedFile: base64 });
            }}
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          fullwidth
          type="submit"
        >
          Submit
        </Button>{" "}
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="secondary"
          onClick={clear}
          size="small"
          fullwidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
}

export default Form;

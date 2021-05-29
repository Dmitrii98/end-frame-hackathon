import { useState } from "react";
import axios from "axios";
import { Button, TextareaAutosize } from "@material-ui/core";
import "./AddPost.scss";

const AddPost = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [post, setPost] = useState(
    {
      author: `${user?.name} ${user?.lastName}`,
      // isAnon: false,
      // forAll: false,
      message: "",
      dorm: user?.dorm
    }
  );

  const updatePost = (e) => {
    setPost(prevUser => ({...prevUser, [e.target.name]: e.target.value}));
  };

  const handleAddPost = async () => {
    try {
      const res = await axios.post("http://10.131.56.224:4000/addPost",
        post,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${user?.accessToken} `
          },
        }
      );
      setPost(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="add_post">
      <TextareaAutosize
        aria-label="empty textarea"
        className="text_area_add_post"
        placeholder={`${user?.name}, чем Вы хотите поделиться ?`}
        rows={3}
        name="message"
        onChange={(e) => updatePost(e)}
      />
      <div className="add_post_btn">
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddPost}
        >
          Добавить пост
        </Button>
      </div>
    </div>
  );
};

export default AddPost;

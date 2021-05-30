import { useState } from "react";
import axios from "axios";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import "./PostStyles.scss";

const Post = ({ post = {} }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const {
    author,
    message,
    dorm,
    date,
    id,
    count,
    isLiked,
    forAll
  } = post;
  const [testLiked, setTestLiked] = useState(isLiked);
  const [testCount, setTestCount] = useState(count);

  const tapLikeButton = async () => {
    try {
      const res = await axios.post("http://10.131.56.106:4000/tapLikeButton",
        {
          postId: id
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${user?.accessToken}`,
          },
        }
      );
      setTestLiked(!testLiked);
      if (testLiked) {
        setTestCount(testCount - 1);
      } else {
        setTestCount(testCount + 1);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="post">
      <div className="header_post">
        <div className="avatar_header_post ">
          <AccountCircleIcon color="action" className="accountCircleIcon"/>
        </div>
        <div className="author_header_post">
          <p className="name_author_header_post">
            {author}
          </p>
          <p className="data_author_header_post">{date}</p>
        </div>
        <div className="dorm_header_post">
          <p className="name_dorm_header_post">Общежитие №{dorm}</p>
        </div>
        {forAll
          ? <div className="for_all_post">
            <p className="for_all_text">ВАЖНО!</p>
          </div>
          : <div></div>
        }
      </div>
      <div className="message_post">
        <p className="text_message_post">{message}</p>
      </div>
      <div className="buttons_post">
        {
          testLiked
            ? <FavoriteIcon
              color={"secondary"}
              className="favorite_icon"
              onClick={tapLikeButton}
            />
            : <FavoriteBorderIcon
              color={"action"}
              className="unfavorite_icon"
              onClick={tapLikeButton}
            />
        }
        <p className="likes_count">{testCount}</p>
        <ModeCommentOutlinedIcon
          color={"action"}
          className="comment_icon"
        />
      </div>
    </div>
  );
};

export default Post;

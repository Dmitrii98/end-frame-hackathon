import { Button, TextareaAutosize } from "@material-ui/core";
import "./AddPost.scss";

const FilterPosts = () => {
  return (
    <div className="add_post">
      <TextareaAutosize
        aria-label="empty textarea"
        className="text_area_add_post"
        placeholder="Дмитрий, о чем Вы хотите поделиться ?"
        rowsMin={10}
      />
      <div className="add_post_btn">
        <Button
          variant="contained"
          color="primary"
        >
          Добавить пост
        </Button>
      </div>
    </div>
  );
};

export default FilterPosts;

import { TextareaAutosize } from "@material-ui/core";
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
    </div>
  );
};

export default FilterPosts;

import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "../../store/store";
import { useSelector } from "../../store/store";
import { getAllUsers } from "../users/usersSlice";
import { addNewPosts } from "./postsSlice";

export function AddPostForm() {
  const users = useSelector(getAllUsers);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const onContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value);
  const onAuthorChange = (e: ChangeEvent<HTMLSelectElement>) => setUserId(e.target.value);

  const canSave = [title, content, userId].every(Boolean) && addRequestStatus == "idle";

  function onSavePostClicked(e: FormEvent) {
    if (canSave) {

      try {
        setAddRequestStatus("pending");

        dispatch(addNewPosts({ title, body: content, userId })).unwrap();

        setTitle("");
        setContent("");
        setUserId("");
        
      } catch (error) {
        console.error("Failed to save the post",error)
      } finally {
        setAddRequestStatus("idle");
      }
    }
  }

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>{user.name}</option>
  ))

  return (
    <section>
      <h2>Add a new Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title</label>
        <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChange} />

        <label htmlFor="postAuthor">Author</label>
        <select name="postAuthor" id="postAuthor"
        value={userId}
        onChange={onAuthorChange}
        >
          <option value=""></option>
          {usersOptions}
        </select>

        <label htmlFor="postTitle">Post Content</label>
        <textarea id="postContent" name="postContent" value={content} onChange={onContentChange} />
        <button 
        disabled={!canSave}
        type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  );
}

import { useEffect } from "react";
import { useSelector, useDispatch} from "../../store/store";
import { getAllUsers } from "../users/usersSlice";
import { PostsExerpt } from "./PostsExerpt";

import { getAllPosts, getPostStatus, getPostError, fetchPosts } from "./postsSlice";

export function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(getAllPosts);
  const postsStatus = useSelector(getPostStatus);
  const error = useSelector(getPostError);

  useEffect(() => {
    if(postsStatus == "idle") {
      dispatch(fetchPosts())
    }
  }, [postsStatus, dispatch])

  let content;
  if(postsStatus == "loading") {
    content = <p>Loading...</p>
  } else if (postsStatus == "succeeded") {
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    const renderedPosts = orderedPosts.map((post) => (
      <PostsExerpt key={post.id} post={post} />
    ));
    content = renderedPosts;
  } else if (postsStatus == "failed") {
    content = <p>{error}</p>
  }
 
  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
}

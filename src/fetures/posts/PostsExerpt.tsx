import { PostAuthor } from "./PostAuthor";
import { PostDate } from "./PostDate";
import { PostsProps } from "./postsSlice";
import { ReactionButton } from "./ReactionButton";
import { HTMLAttributes} from "react";

interface PostsExerptProps extends HTMLAttributes<HTMLElement> {
  post: PostsProps
}




export function PostsExerpt({post, ...rest}: PostsExerptProps) {
  return (
    <article {...rest}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <PostDate timestamp={new Date(post.date)} />
      </p>
      <ReactionButton post={post} />
    </article>
  );
}

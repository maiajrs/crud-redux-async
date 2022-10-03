import { dispatch } from "../../store/store"
import { addReaction, posts } from "./postsSlice"

export const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}

interface ReactionButtonProps {
  post: posts
}

export function ReactionButton({post}: ReactionButtonProps) {

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => (
    <button
      key={name}
      type="button"
      className="reactionButton"
      onClick={() =>
        dispatch(addReaction({postId: post.id, reaction: name}))
      }
    >
      {emoji} {post.reactions[name as keyof typeof reactionEmoji]}
    </button>
  ))
  return (
    <div>{reactionButtons}</div>
  )
}

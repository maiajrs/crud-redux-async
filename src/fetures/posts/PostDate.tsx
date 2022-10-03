import { formatDistanceToNow } from "date-fns";
import { formatISO } from "date-fns"

interface PostDateProps {
  timestamp: Date
}

export function PostDate({timestamp}: PostDateProps) {

  let timeAgo = "";

  if(timestamp) {
    const date = formatISO(timestamp);
    const time = formatDistanceToNow(new Date(date));

    timeAgo = `${time} ago`

  }

  return (
    <span title={timeAgo}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  )
}

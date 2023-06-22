import PostHeader from "./post-header";
import ReactMarkDown from "react-markdown";
import classes from "./post-content.module.css";
const D_Data = {
  title: "MY POST",
  time: "12/12/2012",
  content: "# very becutiful post is this you will like to read this post",
  image: "my_img.png",
  slug: "mypost",
};
export default function PostContent({ post }) {
  return (
    <article className={classes.content}>
      <PostHeader
        title={post.title}
        image={`/images/post/${post.slug}/${post.image}`}
      />
      <ReactMarkDown>{post.content}</ReactMarkDown>
    </article>
  );
}

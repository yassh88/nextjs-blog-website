import classes from "./all-posts.module.css";
import PostGrid from "./post-grid";

export default function AllPost({ posts }) {
  return (
    <section className={classes.posts}>
      <h1>ALl Post</h1>
      <PostGrid posts={posts} />
    </section>
  );
}

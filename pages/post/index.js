import AllPost from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";

export default function Posts({ posts }) {
  console.log("posts", posts);
  return <AllPost posts={posts} />;
}

export function getStaticProps() {
  const data = getAllPosts();
  return {
    props: { posts: data },
  };
}

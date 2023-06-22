import PostContent from "@/components/posts/post-details.js/post-content";
import { getAllPosts } from "@/lib/posts-util";

export default function Post({ post }) {
  return <PostContent post={post} />;
}

export function getStaticProps(context) {
  const { params } = context;
  const {} = params;
  console.log(params);
  const data = getAllPosts();
  return {
    props: { post: data[0] },
  };
}

export function getStaticPaths() {
  const data = getAllPosts();
  const paths = data.map((obj) => ({ params: { slug: obj.slug } }));
  console.log("params", paths);
  return {
    paths: paths,
    fallback: false, // false or "blocking"
  };
}

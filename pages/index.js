import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { getAllPosts } from "@/lib/posts-util";

export default function Home({ posts }) {
  return (
    <>
      <Hero></Hero>
      <FeaturedPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const data = getAllPosts();
  return {
    props: { posts: data },
  };
}

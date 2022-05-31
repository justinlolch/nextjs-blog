import Head from "next/head";
import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";

export default function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>Justin&quot; Blog</title>
        <meta name="description" content="Justin's Blog for posting about programming and web development" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    // Next.js will attempt to re-generate the page every 10 minutes besides build time
    revalidate: 600
  };
}

// 1) Hero => Present ourseleves
// 2) Featured Posts

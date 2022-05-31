import Head from "next/head";
import { Fragment } from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

// Using slug (getting-posts-xxx) instead of [id] (/posts/[id]) => more search engine friendly and human readable
export default function PostDetailPage(props) {
  const { post } = props;
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilesnames = getPostsFiles();

  const slugs = postFilesnames.map((filename) => filename.replace(/\.md$/, ""));

  return {
    // paths: [{ params: { slug: "getting-started-nextjs" } }], Can be doing like this to prepare all paths should be pre-generated
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: "blocking", // Great for blog which has many posts and many of them are rarely visited, And just prepare for some of them
  };
}

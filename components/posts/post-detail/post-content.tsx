import classes from "../../../styles/post-content.module.css";
import PostHeader from "./post-header";

const DUMMY_POST = {
  title: "Post 1",
  slug: "post-1",
  date: "2020-01-01",
  image: "getting-started-nextjs.png",
  content: '# This is a first post',
};

export default function PostContent(props) {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
}

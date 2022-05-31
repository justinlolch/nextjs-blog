import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
    {title: "Post 1", slug: "post-1", date: "2020-01-01", image: "getting-started-nextjs.png", excerpt: "This is the first post"},
    {title: "Post 2", slug: "post-2", date: "2020-01-01", image: "getting-started-nextjs.png", excerpt: "This is the first post"},
    {title: "Post 3", slug: "post-3", date: "2020-01-01", image: "getting-started-nextjs.png", excerpt: "This is the first post"},
    {title: "Post 4", slug: "post-4", date: "2020-01-01", image: "getting-started-nextjs.png", excerpt: "This is the first post"},
  ];

export default function AllPostsPage(){
    return (
        <AllPosts posts={DUMMY_POSTS}/>
    )

}
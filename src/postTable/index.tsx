import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PostTable from "./components/postTable";

const PostTableContainer = ({ posts }: any) => {
  const router = useRouter();
  const [reprocessPosts, setReprocessPosts] = useState([]);

  useEffect(() => {
    const { tag } = router.query;

    if (!!tag) {
      const hasTagPosts = posts.filter((post: any) => {
        return post.slug.indexOf(tag) > -1;
      });
      setReprocessPosts(hasTagPosts);
    } else {
      setReprocessPosts(posts);
    }
  }, [posts, router]);

  return (
    <>
      <PostTable reprocessPosts={reprocessPosts} />
    </>
  );
};

export default PostTableContainer;

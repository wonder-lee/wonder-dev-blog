import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import getPosts from "../utils/getPosts";
import PostCard from "../components/postCard";

export default function Home({ posts }: any) {
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
  }, [router]);

  return (
    <div className="max-w-prose prose px-4">
      <table className="inline-table w-full">
        <thead className="text-slate-700 text-left">
          <tr>
            <th>no</th>
            <th>title</th>
            <th>tag</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody className="text-slate-500">
          {reprocessPosts.reverse().map((post: any, index: number) => (
            <PostCard
              key={post.slug}
              title={post.data.title}
              date={post.data.date}
              tag={post.data.tag}
              description={post.data.description}
              slug={post.slug}
              index={index}
              length={reprocessPosts.length}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const getStaticProps = () => {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};

import Head from "next/head";
import PostTableContainer from "../src/postTable";
import getPosts from "../utils/getPosts";

export default function Home({ posts }: any) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="이상한 나라의 개발자 WONDER LEE의 블로그 입니다. "
        />
        <title>wonder-dev-blog</title>
      </Head>
      <PostTableContainer posts={posts} />
    </>
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

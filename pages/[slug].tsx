import { MDXRemote } from "next-mdx-remote";
import getPost from "../utils/getPost";
import getPosts from "../utils/getPosts";
import { serialize } from "next-mdx-remote/serialize";

function Post({ data, content }: any) {
  return (
    <>
      <div className="px-4">
        <time className="text-slate-400">{data.date}</time>
        <h3 className="font-bold dark:text-slate-200 text-2xl pt-3">
          {data.title}
        </h3>
      </div>
      <div className="prose my-8 px-4 text-sm">
        <MDXRemote {...content} />
      </div>
    </>
  );
}

export default Post;

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post: any) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const post = await getPost(params.slug);
  const mdxSource = await serialize(post.content);
  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  };
};

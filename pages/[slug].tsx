import { MDXRemote } from "next-mdx-remote";
import getPost from "../utils/getPost";
import getPosts from "../utils/getPosts";
import { serialize } from "next-mdx-remote/serialize";

function Post({ data, content }: any) {
  return (
    <div>
      <h1 className="font-bold text-7xl mt-24 mb-12">{data.title}</h1>
      <time className="text-gray-500 italic">{data.date}</time>
      <div className="prose mt-12">
        <MDXRemote {...content} />
      </div>
    </div>
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

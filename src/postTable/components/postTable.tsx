import PostTableRow from "./postTableRow";

const PostTable = ({ reprocessPosts }: any) => {
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
          {reprocessPosts.map((post: any, index: number) => (
            <PostTableRow
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
};

export default PostTable;

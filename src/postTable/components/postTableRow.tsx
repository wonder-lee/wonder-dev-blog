import Link from "next/link";

const PostTableRow = ({ title, date, tag, slug, index, length }: any) => {
  return (
    <Link href="/[slug]" as={`/${slug}`}>
      <tr className="text-sm hover:cursor-pointer hover:bg-slate-50">
        <td>{length - index}</td>
        <td className="min-w-50">{tag}</td>
        <td className="max-w-xs">{title}</td>
        <td>{date}</td>
      </tr>
    </Link>
  );
};

export default PostTableRow;

import Link from "next/link";

function PostCard({ title, date, tag, slug, index, length }: any) {
  return (
    <Link href="/[slug]" as={`/${slug}`}>
      <tr className="text-sm hover:cursor-pointer hover:bg-slate-50">
        <td>{length - index}</td>
        <td>{title}</td>
        <td>{tag}</td>
        <td>{date}</td>
      </tr>
    </Link>
  );
}

export default PostCard;

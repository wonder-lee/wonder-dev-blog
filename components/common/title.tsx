import Link from "next/link";

const Title = () => {
  return (
    <h3 className="my-4 mx-auto p-4 hover:cursor-pointer text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 text-3xl">
      <Link href="/">WONDER_DEV_BLOG</Link>
    </h3>
  );
};

export default Title;

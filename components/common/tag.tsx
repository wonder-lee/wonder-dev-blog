const Tag = ({ tag, onClickTagButton, router }: any) => {
  return (
    <span
      key={tag.query}
      onClick={() => onClickTagButton(tag.query)}
      className={`${
        (tag.query &&
          router.asPath.slice(1, router.asPath.length).indexOf(tag.query) >
            -1) ||
        (!tag.query && router.asPath === "/")
          ? "text-xs mr-3 mb-4 px-3 py-2 rounded-xl hover:cursor-pointer bg-purple-100 text-purple-600 shadow-[rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,rgba(0, 0, 0, 0.3) 0px 18px 36px -18px]"
          : "text-xs mr-3 mb-4 px-3 py-2 rounded-xl hover:cursor-pointer bg-slate-50 shadow-[rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,rgba(0, 0, 0, 0.3) 0px 18px 36px -18px]"
      }`}
    >
      <span>{tag.name}</span>
    </span>
  );
};

export default Tag;

import { useState } from "react";
import { useRouter } from "next/router";
import Tag from "../../components/common/tag";

const TagListContainer = () => {
  const [tagButtons] = useState([
    { name: "#전체", query: "" },
    { name: "#개발", query: "devs" },
    { name: "#TIL", query: "tils" },
    { name: "#에러", query: "errors" },
    { name: "#생각", query: "dreams" },
    { name: "#회고", query: "memory" },
  ]);

  const onClickTagButton = (query: string) => {
    !!query
      ? router.push({ pathname: "/", query: { tag: query } })
      : router.push("/");
  };

  const router = useRouter();

  return (
    <div className="max-w-prose prose px-4 my-8">
      {tagButtons.map((tag) => {
        return (
          <Tag
            key={tag.name}
            tag={tag}
            onClickTagButton={onClickTagButton}
            router={router}
          />
        );
      })}
    </div>
  );
};

export default TagListContainer;

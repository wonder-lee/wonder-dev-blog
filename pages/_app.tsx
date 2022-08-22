import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [tagButtons] = useState([
    { name: "#개발", query: "devs" },
    { name: "#TIL", query: "tils" },
    { name: "#에러", query: "errors" },
    { name: "#생각", query: "dreams" },
    { name: "#회고", query: "memory" },
  ]);
  const onClickTagButton = (query: string) => {
    router.push({ pathname: "/", query: { tag: query } });
  };
  return (
    <div className="max-w-prose my-8 mx-auto">
      <>
        <h3 className="my-4 mx-auto p-4 hover:cursor-pointer text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 text-3xl">
          <Link href="/">WONDER_DEV</Link>
        </h3>
        <div className="max-w-prose prose px-4 my-8">
          {tagButtons.map((tag) => {
            return (
              <span
                key={tag.query}
                className="text-xs mr-3 px-3 py-2 rounded-xl hover:cursor-pointer bg-slate-50"
                id="tagButtonStyle"
              >
                <span onClick={() => onClickTagButton(tag.query)}>
                  {tag.name}
                </span>
              </span>
            );
          })}
        </div>
        <Component {...pageProps} />
      </>
    </div>
  );
}

export default MyApp;

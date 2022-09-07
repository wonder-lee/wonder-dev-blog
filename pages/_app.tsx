import { useState } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
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

  return (
    <>
      <Head>
        <meta
          name="description"
          content="이상한 나라의 개발자 WONDER LEE의 블로그 입니다. "
        />
        <title>wonder-dev-blog</title>
      </Head>
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
                  onClick={() => onClickTagButton(tag.query)}
                  className={`${
                    (tag.query &&
                      router.asPath
                        .slice(1, router.asPath.length)
                        .indexOf(tag.query) > -1) ||
                    (!tag.query && router.asPath === "/")
                      ? "text-xs mr-3 mb-4 px-3 py-2 rounded-xl hover:cursor-pointer bg-purple-100 text-purple-600 shadow-[rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,rgba(0, 0, 0, 0.3) 0px 18px 36px -18px]"
                      : "text-xs mr-3 mb-4 px-3 py-2 rounded-xl hover:cursor-pointer bg-slate-50 shadow-[rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,rgba(0, 0, 0, 0.3) 0px 18px 36px -18px]"
                  }`}
                >
                  <span>
                    {tag.name}
                  </span>
                </span>
              );
            })}
          </div>
          <Component {...pageProps} />
        </>
      </div>
    </>
  );
}

export default MyApp;

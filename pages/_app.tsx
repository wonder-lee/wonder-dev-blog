import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="max-w-prose my-8 mx-auto">
      <h3 className="my-4 mx-auto p-4 hover:cursor-pointer text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 md:text-3xl text-violet-500">
        <Link href="/">WONDER_DEV</Link>
      </h3>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

import type { AppProps } from "next/app";
import Title from "../components/common/title";
import TagListContainer from "../src/tagList";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="max-w-prose my-8 mx-auto">
      <Title />
      <TagListContainer />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

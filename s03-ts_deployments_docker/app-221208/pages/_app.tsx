import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};

type Props = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page) => page);

  // return (
  //   <>
  //     <h1>My App</h1>
  //     <Component {...pageProps} />
  //   </>
  // );

  return getLayout(<Component {...pageProps}></Component>);
}

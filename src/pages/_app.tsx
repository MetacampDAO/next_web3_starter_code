import { Wallet } from "@/utils/Wallet";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { StoreProvider } from "@/utils/Store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>Docmument</title>
      </Head>
      <Wallet>
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
      </Wallet>
    </>
  );
}

import type { NextPage } from "next";
import Head from "next/head";
import Home from "./Home";
import { GA_TRACKING_ID } from "../lib/gtag";

const isProduction = process.env.NODE_ENV === "production";
const App: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Meta Yield - Allow any project to bootstrap liquidity through staking
          on Meta Pool.
        </title>
        {/* enable analytics script only for production */}
        {isProduction && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
              }}
            />
          </>
        )}
      </Head>
      <Home />
    </>
  );
};

export default App;

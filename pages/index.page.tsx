import type { NextPage } from "next";
import Home from "./Home";
import Parser from "rss-parser";
import * as cheerio from "cheerio";
import { METAYIELD_FEED_URL } from "../constants/common";

interface Props {
  news: any;
}

const App = ({news}: Props) => {
  return (
    <>
      {<Home news={news}/>}
    </>
  );
};

App.getInitialProps = async () => {
  const parser = new Parser();
  let news: any = [];
  try {
    let feed = await parser.parseURL(METAYIELD_FEED_URL);
    news = feed.items
      .map((item: any) => {
        return {
          title: item.title,
          creator: item.creator,
          category: item.categories[0],
          image:
            cheerio.load(item.content)("img").attr("data-large-file") || null,
          link: item.link,
        };
      })
      .slice(0, 3);
  } catch {}

  return {
    news
  };
};
export default App;

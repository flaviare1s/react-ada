import "./styles.css";
import { Article } from "../Article/Article";
import { useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

interface ArticleData {
  id: number;
  title: string;
  news_site: string;
  summary: string;
  image_url: string;
}

export const ArticleList = () => {
  const [news, setNews] = useState<ArticleData[]>([]);

  useEffect(() => {
    async function loadNews() {
      const response = await axios.get(
        "https://api.spaceflightnewsapi.net/v4/articles/"
      );
      const newsData = response.data;
      console.log(newsData);
      setNews(newsData.results);
    }
    loadNews();
  }, []);

  return (
    <section id="articles">
      {news.length === 0 ? (
        <div style={{ height: "100vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="white"
            ariaLabel="loading"
          />
        </div>
      ) : (
        news.map((article) => (
          <Article
            key={article.id}
            title={article.title}
            provider={article.news_site}
            description={article.summary}
            image={article.image_url}
          />
        ))
      )}
    </section>
  );
};

import "./styles.css";
import { Article } from "../Article/Article";
import { useEffect, useState } from "react";
import axios from "axios";

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
        { news.map((article) => {
          return (
          <Article
          key={article.id}
            title={article.title}
            provider={article.news_site}
            description={article.summary}
            image={article.image_url}
          />
          )
        })}
      </section>
    );
  }

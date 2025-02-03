import "./styles.css";
import React from "react";
import { Article } from "../Article/Article";
import article1Img from "../../assets/images/article1.png";
import article2Img from "../../assets/images/article2.png";
import article3Img from "../../assets/images/article3.png";

export class ArticleList extends React.Component {
  render() {
    return (
      <section id="articles">
        <Article
          title="Designing Dashboards"
          provider="NASA"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          image={article1Img}
        />
        <Article
          title="Vibrant Portraits of 2020"
          provider="SpaceNews"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          image={article2Img}
        />
        <Article
          title="36 Days of Malayalam type"
          provider="Spaceflight Now"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          image={article3Img}
        />
      </section>
    );
  }
}

import "./styles.css";
import React from "react";

interface ArticleProps {
  title: string;
  provider: string;
  description: string;
  image: string;
}

export class Article extends React.Component<ArticleProps> {
  render() {
    return (
      <article id="article">
        <img src={this.props.image} alt={this.props.title} />
        <div className="article-infos">
          <h2>{this.props.title}</h2>
          <h3>{this.props.provider}</h3>
          <p>{this.props.description}</p>
        </div>
      </article>
    )
  }
}

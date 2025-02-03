import "./styles/App.css";
import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { ArticleList } from "./components/ArticleList.tsx/ArticleList";
import { Counter } from "./components/Counter/Counter";


class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <ArticleList />
      </>
    );
  }
}

export default App;

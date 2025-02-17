/* eslint-disable react/prop-types */
import { useState } from "react";
import ArticleCard from "../molecules/ArticleCard";
import Button from "../atoms/Button";

const ArticleList = ({ articles }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="flex flex-col items-center gap-[72px]">
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-[32px]">
        {articles.slice(0, showAll ? articles.length : 3).map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>

      <Button onClick={() => setShowAll(!showAll)}>
        {showAll ? "See Less Article" : "Read More Article"}
      </Button>
    </div>
  );
};

export default ArticleList;

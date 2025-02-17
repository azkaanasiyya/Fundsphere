/* eslint-disable react/prop-types */
import ArticleCard from "../molecules/ArticleCard";

const ArticleList = ({ articles, showAll }) => {

  return (
    <div className="flex flex-col items-center gap-[72px]">
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-[32px]">
        {articles.slice(0, showAll ? articles.length : 3).map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>

    </div>
  );
};

export default ArticleList;

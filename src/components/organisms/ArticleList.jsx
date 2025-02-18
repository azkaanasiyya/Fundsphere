/* eslint-disable react/prop-types */
import ArticleCard from '../molecules/articleCard';

const articleList = ({ articles, showAll }) => {
  return (
    <div className="flex flex-col items-center gap-[72px]">
      <div className="grid gap-[32px] md:grid-cols-3 lg:grid-cols-3">
        {articles.slice(0, showAll ? articles.length : 3).map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default articleList;

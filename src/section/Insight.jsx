import pattern from '../assets/patternInsight.svg';
import Headline from '../components/atoms/Headline';
import articles from '../data/articles';
import ArticleList from '../components/organisms/ArticleList';

export default function Insight() {

  return (
    <div
      id="insight"
      className="insight-section flex flex-col items-center bg-neutral-50 px-[20px] py-[32px] lg:px-[119px] lg:py-[120px]"
      style={{ backgroundImage: `url(${pattern})` }}
    >
      <div className="container flex max-w-[1201px] flex-col items-center gap-[72px]">
        <Headline tag="INSIGHT" title="Magazine" description="Find growth insight in our blog." />

        <ArticleList articles={articles} />
      </div>
    </div>
  );
}

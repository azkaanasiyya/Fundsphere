/* eslint-disable import/no-unresolved */
import pattern from '../../assets/patternInsight.svg';
import Headline from '../atoms/Headline';
import articles from '../../data/ArticleData';
import ArticleList from '../organisms/ArticleList';
import { useState } from 'react';
import Button from '../atoms/Button';

export default function Insight() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div
      id="insight"
      className="insight-section flex flex-col items-center bg-neutral-50 px-[20px] py-[32px] lg:px-[119px] lg:py-[120px]"
      style={{ backgroundImage: `url(${pattern})` }}
    >
      <div className="container flex max-w-[1201px] flex-col items-center gap-[72px]">
        <Headline tag="INSIGHT" title="Magazine" description="Find growth insight in our blog." />

        <ArticleList articles={articles} showAll={showAll} />

        <Button onClick={() => setShowAll(!showAll)}>{showAll ? 'See Less' : 'See More Articles'}</Button>
      </div>
    </div>
  );
}

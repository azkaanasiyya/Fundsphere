import Hero from './components/section/hero';
import Ads from './components/section/ads';
import Features from './components/section/features';
import Plans from './components/section/plans';
import Insight from './components/section/insight';
import Testimony from './components/section/testimony';
import PageTemplate from './layout/pageTemplate';

function App() {
  return (
    <PageTemplate>
      <Hero />
      <Ads />
      <Features />
      <Plans />
      <Insight />
      <Testimony />
    </PageTemplate>
  );
}

export default App;

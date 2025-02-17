import Hero from './section/Hero';
import Ads from './section/Ads';
import Features from './section/Features';
import Plans from './section/Plans';
import Insight from './section/Insight';
import Testimony from './section/Testimony';
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

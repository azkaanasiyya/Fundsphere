import Hero from './components/section/Hero';
import Ads from './components/section/Ads';
import Features from './components/section/Features';
import Plans from './components/section/Plans';
import Insight from './components/section/Insight';
import Testimony from './components/section/Testimony';
import PageTemplate from './layout/PageTemplate2';
import TopBanner from './components/section/Banner';

function App() {
  return (
    <>
    <TopBanner/>
    <PageTemplate>
      <Hero />
      <Ads />
      <Features />
      <Plans />
      <Insight />
      <Testimony />
    </PageTemplate>
    </>
  );
}

export default App;

import Navbar from '../components/templates/Navbar';
import CTA from '../components/templates/CTA';
import Footer from '../components/templates/Footer';

// eslint-disable-next-line react/prop-types
const PageTemplate = ({ child }) => {
  return (
    <>
      <Navbar />
      {child}
      <CTA />
      <Footer />
    </>
  );
};

export default PageTemplate;

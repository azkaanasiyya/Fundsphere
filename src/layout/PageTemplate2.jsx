import Navbar from '../components/templates/Navbar2';
import CTA from '../components/templates/CTA';
import Footer from '../components/templates/Footer2';

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

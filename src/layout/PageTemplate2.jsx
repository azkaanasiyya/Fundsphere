import Navbar from '../components/templates/Navbar2';
import CTA from '../components/templates/CTA';
import Footer from '../components/templates/Footer2';

// eslint-disable-next-line react/prop-types
const PageTemplate = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <CTA />
      <Footer />
    </>
  );
};

export default PageTemplate;

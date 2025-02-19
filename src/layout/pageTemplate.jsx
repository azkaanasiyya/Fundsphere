import Navbar from '../components/templates/Navbar';
import CTA from '../components/templates/CTA';
import Footer from '../components/templates/Footer';

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

import Navbar from '../components/Navbar';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

// eslint-disable-next-line react/prop-types
const pageTemplate = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <CTA />
      <Footer />
    </>
  );
};

export default pageTemplate;

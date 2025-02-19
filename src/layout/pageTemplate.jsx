import Navbar from '../components/templates/navbar';
import CTA from '../components/templates/CTA';
import Footer from '../components/templates/footer';

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

import Header from './components/Header';
import Companies from './components/Companies';
import WhyUs from './components/WhyUs';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import CompaniesLogos from './components/CompaniesLogos';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <Companies />
      <WhyUs />
      <AboutUs />
      <Products />
      <Testimonials />
      <CompaniesLogos />
      <CTA />
      <Footer />
    </>
  );
}

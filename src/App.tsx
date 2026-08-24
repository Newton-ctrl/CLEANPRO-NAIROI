import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import About from './components/About';
import MidCTA from './components/MidCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyActions from './components/StickyActions';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <HowItWorks />
      <Testimonials />
      <About />
      <MidCTA />
      <Contact />
      <Footer />
      <StickyActions />
    </div>
  );
}

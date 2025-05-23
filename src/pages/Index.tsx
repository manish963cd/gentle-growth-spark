
import CustomCursor from '../components/CustomCursor';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import CoursesSection from '../components/CoursesSection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navigation />
      <main>
        <HeroSection />
        <CoursesSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

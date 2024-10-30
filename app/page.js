import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import SevicesSection from './sections/SevicesSection';
import TestimonialsSection from './sections/TestimonialsSection';
import BackgroundBeamsWithCollisionDemo from '@/components/example/background-beams-with-collision-demo';
import ThreeDCardDemo from '@/components/example/3d-card-demo';
import DownloadButton from './components/DownloadButton';
import Name from './components/Name';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="w-full p-4">
      
      <HeroSection />
      <AboutSection />
      <SevicesSection />
      <ProjectsSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <Footer/>
      {/* <BackgroundBeamsWithCollision/> */}
      {/* <ThreeDCardDemo/> */}
    
    </main>
  );
}

import Carousel from '../components/Carousel/Carousel';
import Features from '../components/Features';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HeroHome } from '../components/Hero';
import Testimonials from '../components/Testimonials';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <Carousel />
      <main className="flex-grow">
        <HeroHome />
        <Features />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}

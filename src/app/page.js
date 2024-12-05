import Navbar from '../components/Navbar';
import Navbar2nd from '../components/Navbar2nd';
import Hero from '../components/Hero';
import Bento from '../components/Bento';
import CarouselCard from '../components/carousel-card';
export default function Home() {
  return (
    <main>
      <Navbar />
      <Navbar2nd />
      <Hero />
      <Bento />
      <CarouselCard />
    </main>
  );
}

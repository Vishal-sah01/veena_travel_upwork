import Navbar from '../components/Navbar';
import Navbar2nd from '../components/Navbar2nd';
import Hero from '../components/Hero';
import Bento from '../components/Bento';
import CarouselCard from '../components/carousel-card';
import TourPackage from '../components/TourPackage';
import Review from '../components/Review';
import Banner from '../components/Banner';
import TourFeatures from '../components/TourFeatures';
import ToursCompleted from '../components/ToursCompleted';
export default function Home() {
  return (
    <main>
      <Navbar />
      <Navbar2nd />
      <Hero />
      <Bento />
      <CarouselCard />
      <TourPackage />
      <Review />
      <Banner />
      <TourFeatures />
      <ToursCompleted />
    </main>
  );
}

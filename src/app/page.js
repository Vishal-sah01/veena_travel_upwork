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
import TourCarousel from '../components/Tour-Carousel';
import LuxuryTravelHero from '../components/Luxury-travel-hero';
import TourIndiaCarousel from '../components/TourIndia-Carousel';
import TravelTips from '../components/Travel-Tips';
import Packages from '../components/Packages';
import Footer from '../components/Footer';
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
      <TourCarousel />
      <LuxuryTravelHero />
      <TourIndiaCarousel />
      <TravelTips />
      <Packages />
      <Footer />
    </main>
  );
}

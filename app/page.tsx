import TravelioHero from "@/components/home/hero";
import TourCategories from "@/components/home/tourCategory";
import PopularDestinations from "@/components/home/popularDestinations";
import TourPackages from "@/components/home/tourPackages";
import WhyChooseUs from "@/components/home/whyChooseUs";
import JourneyNumbers from "@/components/home/journeyNumbers";
import Testimonials from "@/components/home/testimonials";
import WorldWaiting from "@/components/home/worldWaiting";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main>
      <TravelioHero />
      <TourCategories />
      <PopularDestinations />
      <TourPackages />
      <WhyChooseUs />
      <JourneyNumbers />
      <Testimonials />
      <WorldWaiting />
      <Footer />
    </main>
  );
}

import TravelioHero from "@/components/home/hero";
import TourCategories from "@/components/home/tourCategory";
import PopularDestinations from "@/components/home/popularDestinations";
import TourPackages from "@/components/home/tourPackages";
import WhyChooseUs from "@/components/home/whyChooseUs";
import Testimonials from "@/components/home/testimonials";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main>
      <TravelioHero />
      <TourCategories />
      <PopularDestinations />
      <TourPackages />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  );
}
import Hero from "@/components/Hero";
import FooterNavigation from "@/components/layouts/FooterNavigation";
import HeaderNavigation from "@/components/layouts/HeaderNavigation";

const Home = () => {
  return (
    <div>
      <HeaderNavigation />
      <Hero />
      <FooterNavigation />
    </div>
  );
};
export default Home;

import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import PromoBanner from "@/components/PromoBanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <PromoBanner />
    </main>
  );
}
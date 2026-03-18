import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Products } from "../components/Products";
import { ConsultationBanner } from "../components/ConsultationBanner";
import { Services } from "../components/Services";
import { Facts } from "../components/Facts";
import { Certificates } from "../components/Certificates";
import { ImplementedObjects } from "../components/ImplementedObjects";
import { Partners } from "../components/Partners";
import { News } from "../components/News";
import { Reviews } from "../components/Reviews";
import { Projects } from "../components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <ConsultationBanner />
      <Services />
      <Facts />
      <Certificates />
      <ImplementedObjects />
      <Partners />
      <News />
      <Reviews />
      <Projects />
    </>
  );
}

import Image from "next/image";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import LogoTicker from "./components/LogoTicker";
import Features from "./components/Features";
import ProductShowcase from "./components/ProductShowcase";
import FYQ from "./components/FYQ";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <NavBar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <FYQ />
      <CallToAction />
      <Footer/>
    </div>
  );
}

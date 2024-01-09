import About from "@/components/about";
import Banner from "@/components/banner";
import Contact from "@/components/contact";
import Mentoring from "@/components/mentoring";
import Nav from "@/components/nav";
import Services from "@/components/services";
import Work from "@/components/work";

export default function Home() {
  return (
    <div className="bg-[url('/assets/site-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="3xl:container w-full px-2">
        <Banner />
        <Nav />
        <About />
        <Services />
        <Work />
        <Mentoring />
        <Contact />
        <div className="h-[4000px]"></div>
      </div>
    </div>
  );
}

import About from "@/components/about";
import Banner from "@/components/banner";
import Contact from "@/components/contact";
import Mentoring from "@/components/mentoring";
import Nav from "@/components/nav";
import Services from "@/components/services";
import Work from "@/components/work";

export default function Home() {
  return (
    <div className="w-full overflow-y-hidden bg-[url('/assets/site-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="container flex w-full flex-col items-center justify-center px-2">
        <Banner />
        <Nav />
        <About />
        <Services />
        <Work />
        <Mentoring />
        <Contact />
        <div className="h-[3000px]"></div>
      </div>
    </div>
  );
}

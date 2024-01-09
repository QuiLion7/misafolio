import Header from "./header";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

export default function Banner() {
  return (
    <div id="home" className="flex flex-col">
      <Header />
      <section className="flex items-center py-8 lg:h-screen lg:py-24">
        Banner
      </section>
    </div>
  );
}

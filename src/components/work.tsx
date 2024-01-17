"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

export default function Work() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <section
      id="work"
      className="flex min-h-svh w-full flex-col items-center justify-center"
    >
      <div className="flex min-h-svh w-full flex-col items-center justify-center gap-4">
        <div className="flex w-full flex-col items-center justify-center">
          <motion.h2
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" text-xl font-bold uppercase tracking-wide text-primary md:text-2xl lg:text-4xl"
          >
            O QUE VOCÊ VAI ENCONTRAR
          </motion.h2>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <motion.h3
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center text-sm font-bold uppercase tracking-wide md:text-lg lg:text-xl"
          >
            Essa é a sua
            <TypeAnimation
              sequence={[" Oportunidade", 3000, " Chance", 3000]}
              speed={50}
              wrapper="span"
              repeat={Infinity}
            />
          </motion.h3>
        </div>
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="h-[280px] w-full max-w-[768px] p-2 sm:h-[400px]"
        >
          {isClient && (
            <ReactPlayer
              url="https://youtu.be/b3YnASflhTA?si=5eiUmgiM4GSOVIR1&rel=0"
              controls={true}
              volume={1}
              playing={true}
              loop={true}
              width="100%"
              height="100%"
            />
          )}
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="mt-2 flex w-full animate-pulse items-center justify-center text-center md:text-left"
        >
          <Button
            asChild
            className="w-full max-w-[200px] cursor-pointer rounded-xl bg-gradient-to-r from-purple-900 via-purple-600 to-violet-600 font-bold uppercase text-white hover:from-violet-900 hover:to-purple-600"
          >
            <Link to="services" smooth={true} spy={true}>
              EU QUERO
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

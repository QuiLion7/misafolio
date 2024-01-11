"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import { Button } from "./ui/button";
import { Link } from "react-scroll";
import Image from "next/image";

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section
      id="about"
      className="flex h-svh w-full flex-col items-center justify-center"
      ref={ref}
    >
      <div className="flex h-full w-full items-center">
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 md:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex h-full w-full flex-1 items-center justify-center bg-center bg-no-repeat mix-blend-lighten"
          >
            <Image
              src="/assets/about2.png"
              width={0}
              height={0}
              sizes="100%"
              className="h-ful w-[300px] md:w-[400px]"
              style={{ objectFit: "cover" }}
              alt="Picture of the author"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex h-full w-full flex-1 flex-col items-center justify-start gap-4 p-2 text-center md:items-start md:justify-center md:text-left"
          >
            <h2 className="text-xl font-bold uppercase tracking-wide text-primary md:text-2xl lg:text-4xl">
              Sobre Mim
            </h2>
            <h3 className="text-sm font-bold uppercase tracking-wide md:text-lg lg:text-xl">
              Eu sou um Trader técnico e consistente
            </h3>
            <p className="lg-text-base text-xs leading-5 md:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="grid auto-cols-max grid-flow-col items-center justify-start gap-1">
              <div className="flex w-auto max-w-[95px] flex-col items-center justify-center md:max-w-[120px]">
                <div className="text-2xl font-bold text-primary md:text-2xl lg:text-4xl">
                  {inView ? <CountUp start={0} end={8} duration={3} /> : null}
                </div>
                <div className="text-center text-xs uppercase tracking-[2px] md:text-sm lg:text-base">
                  Anos de Experiência
                </div>
              </div>
              <div className="flex w-auto max-w-[95px] flex-col items-center justify-center md:max-w-[120px]">
                <div className="text-2xl font-bold text-primary md:text-2xl lg:text-4xl">
                  {inView ? <CountUp start={0} end={300} duration={3} /> : null}
                </div>
                <div className="text-center text-xs uppercase tracking-[2px] md:text-sm lg:text-base">
                  Alunos e Contando
                </div>
              </div>
              <div className="flex w-auto max-w-[95px] flex-col items-center justify-center md:max-w-[120px]">
                <div className="text-2xl font-bold text-primary md:text-2xl lg:text-4xl">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className="text-center text-xs uppercase tracking-[2px] md:text-sm lg:text-base">
                  Anos como Professor
                </div>
              </div>
            </div>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mt-2 w-full text-center md:text-left"
            >
              <Button
                asChild
                className="w-full max-w-[250px] cursor-pointer rounded-xl bg-gradient-to-r from-purple-900 via-purple-600 to-violet-600 font-bold uppercase text-white"
              >
                <Link to="contact" smooth={true} spy={true}>
                  Entre em Contato
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

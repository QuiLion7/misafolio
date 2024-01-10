"use client";

import Header from "./header";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import Image from "next/image";
import { Link } from "react-scroll";
import { Button } from "./ui/button";
import Networks from "./networks";

export default function Banner() {
  return (
    <div
      id="home"
      className=" relative flex h-svh w-full flex-col items-center justify-center"
    >
      <Header />
      <section className="flex w-full items-center">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex w-full flex-col gap-2 sm:flex-row">
            <div className="flex w-full flex-col items-center justify-center gap-1">
              <div className="w-auto text-center">
                <motion.h1
                  variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="text-4xl font-bold md:text-5xl lg:text-7xl"
                >
                  MISAEL <span>LIMA</span>
                </motion.h1>
                <motion.div
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="flex items-center justify-center gap-[6px] text-2xl font-bold uppercase leading-[1] sm:justify-center md:text-3xl lg:text-5xl"
                >
                  <span>Eu sou</span>
                  <TypeAnimation
                    sequence={[
                      "Trader",
                      2000,
                      "Professor",
                      2000,
                      "Youtuber",
                      2000,
                    ]}
                    speed={50}
                    className="text-primary"
                    wrapper="span"
                    repeat={Infinity}
                  />
                </motion.div>
                <motion.p
                  variants={fadeIn("up", 0.5)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="my-4 max-w-[500px] text-justify text-sm font-normal leading-loose "
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </motion.p>
              </div>
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <Button
                  asChild
                  className="cursor-pointer rounded-xl bg-gradient-to-r from-purple-900 via-purple-600 to-violet-600 font-bold uppercase text-white duration-300"
                >
                  <Link to="contact" smooth={true} spy={true}>
                    Entre em Contato
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <Networks />
              </motion.div>
            </div>
            <motion.div
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView={"show"}
              className="order-first flex h-auto w-full items-center justify-center sm:order-last"
            >
              <div className="group relative flex h-full items-center justify-center rounded-xl duration-300 hover:bg-background/30">
                <Image
                  src="/assets/perfil.png"
                  width={0}
                  height={0}
                  sizes="auto"
                  className="h-auto max-h-[300px] min-h-[200px] w-full rounded-xl bg-primary"
                  alt="Picture of the author"
                />
                <p className="absolute bottom-1 text-xs opacity-0 duration-300 group-hover:opacity-100">
                  @sharkbreakout
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

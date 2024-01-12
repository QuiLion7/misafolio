"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { fadeIn } from "@/utils/variants";
import { Button } from "./ui/button";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

export default function Services() {
  const mentoringTopics = [
    {
      topic: "Order Block",
      description:
        "Identificação e interpretação de blocos de ordem no contexto da análise gráfica.",
    },
    {
      topic: "Imbalance",
      description:
        "Análise de desequilíbrios de oferta e demanda no mercado financeiro.",
    },
    {
      topic: "Fibonacci",
      description:
        "Uso da sequência de Fibonacci e níveis de retração na análise técnica.",
    },
    {
      topic: "BoS e CHoCH",
      description:
        "Compreensão da quebra de estrutura e mudança de caráter usando BoS (Break of Structure) e CHoCH (Change of Character).",
    },
    {
      topic: "Liquidity Forex",
      description:
        "Exploração da liquidez no contexto do trading forex e sua influência nos movimentos de preço.",
    },
    {
      topic: "Inducement Forex",
      description:
        "Análise de induções no trading forex e como identificar oportunidades de negociação.",
    },
    {
      topic: "Point of Interest",
      description:
        "Identificação de pontos de interesse no mercado financeiro para tomada de decisões estratégicas.",
    },
    {
      topic: "Supply and Demand",
      description:
        "Estudo dos princípios de oferta e demanda e sua aplicação na análise técnica.",
    },
    {
      topic: "Premium e Discount",
      description:
        "Entendimento dos conceitos de prêmio (premium) e desconto no contexto de análise de mercado.",
    },
    {
      topic: "SMC Trading",
      description:
        "Análise de acumulação e distribuição no contexto de SMC Trading (Smart Money Concepts).",
    },
  ];

  return (
    <section
      id="services"
      className="flex h-svh w-full flex-col items-center justify-center bg-[url('/assets/forex.png')] bg-cover bg-center bg-no-repeat md:bg-contain"
    >
      <div className="flex h-full w-full flex-col items-center justify-center md:flex-row">
        <div className="flex h-auto w-full flex-1 flex-col items-center justify-center gap-2 ">
          <motion.h2
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="z-10 text-2xl font-bold uppercase tracking-wide text-primary md:text-3xl lg:text-5xl"
          >
            Mentoria Shark
          </motion.h2>
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <TypeAnimation
              sequence={[
                "Navegue pelos mares do trading",
                2000,
                "e desperte o tubarão em você!",
                2000,
              ]}
              speed={50}
              className="text-center text-sm font-bold uppercase tracking-wide md:text-base"
              wrapper="span"
              repeat={Infinity}
            />
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="z-10 mt-2 flex w-full items-center justify-center text-center md:text-left"
          >
            <Button
              asChild
              className="w-full max-w-[200px] cursor-pointer rounded-xl bg-gradient-to-r from-purple-900 via-purple-600 to-violet-600 text-base font-bold uppercase text-white"
            >
              <Link to="contact" smooth={true} spy={true}>
                EU QUERO
              </Link>
            </Button>
          </motion.div>
        </div>
        <div className="flex h-full w-full flex-1 flex-col items-center justify-center p-2 md:flex-row">
          <motion.section
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex h-full w-full items-center justify-center"
          >
            <Accordion
              type="single"
              collapsible
              className="grid w-full grid-cols-1 gap-1 sm:gap-2"
            >
              {mentoringTopics.map((topic, index) => (
                <AccordionItem
                  className=" rounded-2xl bg-background/30 px-4 duration-300 hover:bg-background/90"
                  value={index.toString()}
                  key={index}
                >
                  <AccordionTrigger className="text-[0.7rem] font-bold uppercase duration-300 hover:text-primary md:text-sm">
                    {topic.topic}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col">
                    <h3 className="text-justify text-[0.7rem] font-semibold duration-300 hover:text-primary sm:text-xs md:text-sm">
                      {topic.description}
                    </h3>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.section>
        </div>
      </div>
    </section>
  );
}

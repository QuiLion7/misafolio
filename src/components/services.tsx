"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import { Button } from "./ui/button";
import { Link } from "react-scroll";
import { Check } from "lucide-react";

const forexMentoringPlans = [
  {
    type: "em Grupo",
    focus: "Desenvolva suas Habilidades de Negociação",
    details: [
      "2 Aulas Semanais em Grupo",
      "Acesso aos Grupos",
      "Análises entre Alunos e Professor",
      "Planilha de Gerenciamento Exclusiva",
      "Ebook's Exclusivos",
    ],
    price: "R$ 100,00",
  },
  {
    type: "Individual",
    focus: "Feedback Personalizado e Aulas Particulares",
    details: [
      "2 Aulas Semanais",
      "Feedback de Análises pelo Professor",
      "Planilha de Gerenciamento Exclusiva",
      "Ebook's Exclusivos",
    ],
    price: "R$ 300,00",
  },
  {
    type: "Customizada",
    focus: "Adapte o programa conforme suas necessidades",
    details: [
      "Ilimitadas Aulas",
      "Ilimitados Feedbak's",
      "Acesso aos Grupos",
      "Planilha de Gerenciamento Exclusiva",
      "Ebook's Exclusivos",
    ],
    price: "Customizado",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="flex min-h-svh w-full flex-col items-center justify-center"
    >
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="flex h-[200px] w-full flex-col items-center justify-center gap-2 md:h-[300px]">
          <motion.h2
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-xl font-bold uppercase tracking-wide text-primary md:text-2xl lg:text-4xl"
          >
            Escolha a sua mentoria
          </motion.h2>
          <motion.h3
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center text-sm font-bold uppercase tracking-wide md:text-lg lg:text-xl"
          >
            Explore a mentoria e aprimore suas habilidades de negociação.
          </motion.h3>
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 md:flex-row md:items-start ">
          {forexMentoringPlans.map((plans, index) => (
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              key={index}
              className="group mx-1 flex h-[400px] w-full max-w-[550px] flex-col justify-center rounded-xl border-2 border-primary/30 duration-300 hover:border-primary/100 hover:bg-background/30 md:h-[450px]"
            >
              <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="grid h-full w-full flex-1 grid-rows-3 flex-col p-2 text-center"
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  <p className="text-xl font-bold uppercase duration-300 hover:text-primary group-hover:scale-105 lg:text-2xl">
                    {plans.type}
                  </p>
                  <p className="text-[0.73rem] duration-300 hover:text-primary md:text-xs lg:text-sm">
                    {plans.focus}
                  </p>
                </div>
                <span className="flex items-center justify-center text-xl font-bold duration-300 hover:text-primary md:text-2xl lg:text-3xl">
                  {plans.price}
                </span>
                <div className="mt-2 flex flex-1 items-center justify-center">
                  <Button className="mx-6 w-full max-w-[170px] rounded-xl bg-gradient-to-r from-purple-900 via-purple-600 to-violet-600 text-base font-bold uppercase text-white duration-300 hover:from-violet-900 hover:to-purple-600 md:max-w-[250px] md:text-lg lg:text-xl">
                    Adiquirir
                  </Button>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="grid h-full grid-rows-5 flex-col justify-start p-3"
              >
                {plans.details.map((detail, index) => (
                  <div
                    key={index}
                    className="flex cursor-default items-center justify-start gap-2 hover:scale-105 hover:font-bold hover:text-primary md:text-sm lg:text-base"
                  >
                    <Check className="text-green-600" />
                    {detail}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

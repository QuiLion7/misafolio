"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import { Button } from "./ui/button";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { Check, CheckIcon } from "lucide-react";

const forexMentoringPlans = [
  {
    type: "Mentoria em Grupo",
    focus: "Desenvolva suas habilidades de negociação",
    details: [
      "2 aulas semanais em grupo",
      "Acesso aos Grupos",
      "Análises entre Alunos e Professor",
      "Planilha de Gerenciamento Exclusiva",
      "Ebook's Exclusivos",
    ],
    price: "R$ 100,00",
  },
  {
    type: "Mentoria Individual",
    focus: "Feedback personalizado e aulas particulares",
    details: [
      "2 aulas semanais",
      "Feedback de Análises pelo Professor",
      "Planilha de Gerenciamento Exclusiva",
      "Ebook's Exclusivos",
    ],
    price: "R$ 300,00",
  },
  {
    type: "Mentoria Customizada",
    focus: "Adapte o programa conforme suas necessidades",
    details: [
      "Ilimitadas aulas",
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
      className="flex h-svh w-full flex-col items-center justify-center"
    >
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="flex h-[300px] w-full flex-col items-center justify-center gap-2">
          <h2 className="text-xl font-bold uppercase tracking-wide text-primary md:text-2xl lg:text-4xl">
            Escolha o seu plano
          </h2>
          <h3 className="text-sm font-bold uppercase tracking-wide md:text-lg lg:text-xl">
            Explore a mentoria e aprimore suas habilidades de negociação.
          </h3>
        </div>
        <div className="flex h-full w-full flex-row items-start justify-center gap-2 ">
          {forexMentoringPlans.map((plans, index) => (
            <div
              key={index}
              className="flex h-[500px] w-full flex-col justify-center rounded-xl border-2 border-primary"
            >
              <div className="flex h-full w-full flex-col justify-evenly gap-2  p-3">
                <div className="text-xl uppercase">{plans.type}</div>
                <p className="text-base">{plans.focus}</p>
                <span className="text-3xl font-bold">{plans.price}</span>
                <Button className="mx-6 rounded-xl text-xl font-bold uppercase text-white duration-300 hover:scale-110">
                  Adiquirir
                </Button>
              </div>
              <div className="flex h-full flex-col gap-2  p-3">
                {plans.details.map((detail, index) => (
                  <div key={index} className="flex gap-2">
                    <Check className="text-green-600" />
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

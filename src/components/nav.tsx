"use client";
import {
  Monitor,
  User,
  BookOpenCheck,
  MessagesSquare,
  CandlestickChart,
  GraduationCap,
} from "lucide-react";

import { Link } from "react-scroll";

const navigationLinks = [
  { label: "Inicio", path: "home", icon: Monitor },
  { label: "Sobre Mim", path: "about", icon: User },
  { label: "Serviços", path: "services", icon: CandlestickChart },
  { label: "Entradas", path: "work", icon: BookOpenCheck },
  { label: "Alunos", path: "mentoring", icon: GraduationCap },
  { label: "Contato", path: "contact", icon: MessagesSquare },
];

const Nav = () => {
  return (
    <nav className="fixed bottom-2 z-50 flex w-full items-center justify-center overflow-hidden px-2 lg:bottom-8">
      <div className="flex w-full items-center justify-center">
        <div className=" flex h-full max-h-[80px] w-full max-w-[420px] items-center justify-between rounded-full bg-background/40 p-1 px-3 text-2xl backdrop-blur-2xl lg:px-5">
          {navigationLinks.map((link, index) => {
            return (
              <Link
                key={index}
                to={link.path}
                activeClass="bg-secondary text-primary group"
                smooth={true}
                spy={true}
                className="group flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full p-4 duration-300 hover:bg-secondary sm:h-[60px] sm:w-[60px]"
              >
                <link.icon
                  size={0}
                  className="h-full w-full duration-300 group-hover:scale-110"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Nav;

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
    <nav className="fixed bottom-2 z-50 w-full overflow-hidden lg:bottom-8">
      <div className="container mx-auto">
        <div className="mx-auto flex h-[80px] w-full max-w-[420px] items-center justify-between rounded-full bg-background/40 px-5 text-2xl backdrop-blur-2xl">
          {navigationLinks.map((link, index) => {
            return (
              <Link
                key={index}
                to={link.path}
                activeClass="bg-secondary text-primary group"
                smooth={true}
                spy={true}
                className="group flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full p-4 duration-300 hover:bg-secondary"
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

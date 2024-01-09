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
  { label: "Inicio", path: "/", icon: Monitor },
  { label: "Sobre Mim", path: "/about", icon: User },
  { label: "Serviços", path: "/services", icon: CandlestickChart },
  { label: "Entradas", path: "/work", icon: BookOpenCheck },
  { label: "Alunos", path: "/mentoring", icon: GraduationCap },
  { label: "Contato", path: "/contact", icon: MessagesSquare },
];

const Nav = () => {
  return (
    <nav className="fixed bottom-2 z-50 w-full overflow-hidden lg:bottom-8">
      <div className="container mx-auto">
        <div className="mx-auto flex h-[90px] w-full max-w-[460px] items-center justify-between rounded-full bg-black/20 px-5 text-2xl text-primary/50 backdrop-blur-2xl">
          {navigationLinks.map((link, index) => {
            return (
              <Link
                key={index}
                to={link.path}
                className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full p-2"
              >
                <link.icon size={24} className="text-background" />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Nav;

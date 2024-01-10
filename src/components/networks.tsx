import Link from "next/link";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Networks() {
  return (
    <div className="flex items-center justify-center gap-1">
      <Link
        href="https://www.instagram.com/sharkbreakout"
        target="_blank"
        className="rounded-full p-2 duration-300 hover:bg-secondary hover:text-primary"
      >
        <FaInstagram size={20} />
      </Link>
      <Link
        href="https://www.youtube.com/@MisaTraderOficial"
        target="_blank"
        className="rounded-full p-2 duration-300 hover:bg-secondary hover:text-primary"
      >
        <FaYoutube size={20} />
      </Link>
      <Link
        href="https://www.tiktok.com/@misatrader_oficial"
        target="_blank"
        className="rounded-full p-2 duration-300 hover:bg-secondary hover:text-primary"
      >
        <FaTiktok size={20} />
      </Link>
    </div>
  );
}

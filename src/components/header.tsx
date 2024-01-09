import Image from "next/image";

export default function Header() {
  return (
    <header className="flex h-[50px] w-full items-center justify-between">
      <div className="flex items-center justify-between">
        {/* <Image
            src="/assets/shark-avatar.png"
            width={0}
            height={0}
            sizes="auto"
            className="h-[45px] w-auto"
            alt="Picture of the author"
          /> */}
        <h1 className="bg-gradient-to-r from-purple-900 to-indigo-500 bg-clip-text text-sm font-bold text-transparent md:text-base lg:text-lg">
          MISAEL TRADER
        </h1>
      </div>
    </header>
  );
}

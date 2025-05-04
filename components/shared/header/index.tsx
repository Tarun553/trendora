
import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";


import Menu from "./menu";


const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-center gap-2">
            <Image
              src="/logo.svg"
              alt="logo"
              height={40}
              width={40}
              priority={true}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
       <Menu />
      </div>
    </header>
  );
};

export default Header;

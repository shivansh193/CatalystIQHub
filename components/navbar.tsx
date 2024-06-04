import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/darkmode";
import { Separator } from "@/components/ui/separator";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link href="#" className="flex items-center" prefetch={false}>
            {/* <MountainIcon className="h-6 w-6" /> */}
            <span className="text-2xl text-bold">CatalystIQHub</span>
          </Link>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <button
              className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        <div
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          } absolute left-0 right-0 bg-white dark:bg-gray-950 shadow-md py-4`}
        >
          <nav className="flex flex-col gap-4 px-4">
            <Link
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Services
            </Link>
            <Link
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Team
            </Link>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                Portfolio
              </Button>
              <Button size="sm">Contact</Button>
            </div>
          </nav>
        </div>
        <nav className="hidden md:flex gap-4">
          <Link
            href="#"
            className="font-medium flex items-center text-sm transition-colors hover:underline"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="font-medium flex items-center text-sm transition-colors hover:underline"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="font-medium flex items-center text-sm transition-colors hover:underline"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="#"
            className="font-medium flex items-center text-sm transition-colors hover:underline"
            prefetch={false}
          >
            Team
          </Link>
        </nav>
      </div>
      <Separator />
    </nav>
  );
};
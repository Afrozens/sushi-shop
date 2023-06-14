"use client";

import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Avatar from "./Avatar";

export default function Header() {
  const [user, setUser] = useState(false);
  const pathname = usePathname();
  return (
    <header>
      <nav className="w-full bg-third px-4 py-2.5 h-20 flex flex-wrap items-center mx-auto lg:p-0 lg:bg-transparent lg:flex-nowrap lg:m-0">
        <div className="flex bg-third lg:h-full lg:flex-1 lg:relative">
          <h4 className="title text-white">Komesushi</h4>
        </div>

        <div
          className={`nav-ul ${
            pathname === "/" ? "lg:bg-first" : "lg:bg-third"
          }`}
        >
          <div className="flex items-center lg:order-2">

            {user ? (
              <Avatar />
            ) : (
              <Link
                href="/registrarse"
                className="text-white bg-second hover:scale-110 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 active:scale-90 transition lg:text-2xl"
              >
                Registrate
              </Link>
            )}
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm rounded-lg active:scale-110  transition lg:hidden "
            >
              <RxHamburgerMenu className="text-white w-8 h-8" />
            </button>
          </div>

          <div className="hidden text-white justify-between items-center w-full lg:flex lg:order-1">
            <ul className="flex font-medium space-x-8 mt-0 gap-12">
              <li>
                <Link
                  href="/"
                  className="font-light block py-2 pr-4 text-fifth hover:bg-second lg:hover:bg-transparent lg:hove md:text-2xl r:text-primary-700 lg:p-0 hover:rounded-lg transition uppercase "
                >
                  inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="font-light block py-2 pr-4 pl-3 text-fifth hover:bg-second hover:rounded-xl transition md:text-2xl  lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 uppercase "
                >
                  servicios
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/Afrozens"
                  target="_blank"
                  className="font-light block py-2 pr-4 pl-3 text-fifth transition md:text-2xl  lg:hover:bg-transparentlg:hover:text-primary-700 lg:p-0 uppercase "
                >
                  contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

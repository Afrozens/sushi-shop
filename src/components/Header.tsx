import Link from "next/link";
import Navbar from "./Navbar";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  return (
    <header>
      <nav className="bg-third px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <h4 className="uppercase text-white text-2xl">Komesushi</h4>
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="text-white bg-second hover:scale-110 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 transition"
            >
              Registrate
            </a>
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm rounded-lg active:scale-110  transition lg:hidden "
            >
              <RxHamburgerMenu className="text-white w-8 h-8" />
            </button>
          </div>
          <div className="hidden text-white justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href="#"
                  className="capitalize block py-2 pr-4 pl-3 text-white hover:bg-second lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 hover:rounded-lg transition"
                >
                  inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="capitalize block py-2 pr-4 pl-3 text-white hover:bg-second hover:rounded-xl transition lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0"
                >
                  servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="capitalize block py-2 pr-4 pl-3 text-white hover:bg-second hover:rounded-xl transition lg:hover:bg-transparentlg:hover:text-primary-700 lg:p-0"
                >
                  contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

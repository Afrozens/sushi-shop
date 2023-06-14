import { FormButton, FormInput } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { BsPlayCircle, BsArrowUpRight } from "react-icons/bs";
import { CgInstagram, CgFacebook } from "react-icons/cg";
import { MdOutlineWhatsapp } from "react-icons/md";

export default function Home() {
  //transform: matrix(1,.05,0,1.25,0,0)!important;
  return (
    <>
      <main className="min-h-screen flex flex-col overflow-hidden">
        <section className="lg:flex lg:h-[calc(100vh-80px)]">
          <article className="relative z-10 bg-third w-full flex lg:flex-1">
            <Image
              src="/assets/sushi-chopsticks.png"
              alt="chopsticks with sushi image"
              className="object-contain w-full lg:object-fill"
              width={500}
              height={500}
            />
            <h2 className="absolute bottom-0 text-5xl font-semibold text-white p-6 self-end break-words w-5 text-center leading-tight md:text-9xl md:leading-[10rem] lg:text-9xl lg:leading-[10rem]">
              品寿司
            </h2>
          </article>

          <article className="lg:flex-1.22 flex flex-col p-8 bg-first md:p-12 lg:p-16 lg:justify-center lg:items-center">
            <h1 className="text-6xl font-light leading-extra md:leading-[6rem] lg:text-8xl lg:leading-[7rem]">
              Sushi Exquisito: El Arte del Sabor Japonés
            </h1>
            <p className="my-8 text-2xl text-black opacity-80 font-light leading-9 md:ml-8 lg:leading-relaxed">
              Combinamos los ingredientes más frescos con técnicas tradicionales
              para ofrecerte una experiencia única e inolvidable en sushi.
            </p>
            <div className="flex flex-col gap-5 md:flex-row md:gap-10 md:items-center md:ml-8 lg:self-start">
              <FormButton>ordena ahora</FormButton>
              <button className="cursor-pointer transition hover:scale-110 active:scale-90 flex gap-5 items-center md:self-center md:mb-6   ">
                <BsPlayCircle className="h-10 w-10 opacity-50 lg:w-12 lg:h-12" />
                <h5 className="font-light text-xl lg:text-2xl">
                  ¿Cómo ordenar?
                </h5>
              </button>
            </div>
          </article>
        </section>

        <section className="bg-first w-full lg:flex">
          <aside className="flex flex-col lg:flex-1 justify-center relative bg-white md:flex-row lg:flex-col lg:w-full">
            <div className="p-8 flex-1 flex items-center bg-center bg-no-repeat bg-contain border-b-8 border-b-first md:border-b-0 md:border-r-first md:border-r-8 md:p-12 lg:border-r-0 lg:border-b-8 lg:border-r-none ">
              <Image
                src="/assets/sushi-preview-one.png"
                alt="sushi image"
                className="md:w-52 md:h-48"
                width={140}
                height={150}
              />
            </div>
            <button className="w-48 flex gap-8 items-center absolute right-0 top-2/4 translate-y-[-50%] py-3 p-8 h-16 outline-none font-light capitalize text-lg leading-6 text-white bg-fifth rounded-s-[36px] md:hidden lg:flex lg:w-56 lg:h-20 lg:text-2xl">
              mas platos
              <BsArrowUpRight />
            </button>
            <div className="p-8 flex-1 flex items-center bg-center bg-no-repeat bg-contain md:p-12">
              <Image
                src="/assets/sushi-preview-two.png"
                alt="sushi image"
                className="md:w-52 md:h-48"
                width={120}
                height={100}
              />
            </div>
          </aside>

          <article className="flex flex-col p-8 bg-first md:p-12 lg:flex-1.22 lg:p-16">
            <h5 className="text-light text-third text-xl mb-5 tracking-widest">
              Sobre nosotros / 私たちに関
            </h5>
            <h2 className="text-6xl font-light leading-extra tracking-widest">
              Descubre nuestra amplia variedad de rollos
            </h2>
            <p className="my-8 text-xl text-black opacity-80 font-light leading-9 lg:text-2xl lg:leading-relaxed">
              <b className="underline line decoration-third">
                Rollos exquisitos
              </b>
              ,{" "}
              <b className="underline line decoration-third">
                sashimi suculento
              </b>{" "}
              y otras delicias gastronómicas a través de nuestra fácil
              navegación en línea y disfruta del mejor{" "}
              <b className="underline line decoration-third">sushi</b> desde la
              comodidad de tu hogar con nuestro eficiente{" "}
              <b className="underline line decoration-third">
                servicio a domicilio.
              </b>
            </p>
          </article>
        </section>

        <section className="bg-third w-full px-8 py-16 flex flex-col items-center text-center md:px-12">
          <h3 className="text-6xl font-bold leading-extra text-white lg:text-8xl">
            Recibe ofertas en tu email
          </h3>
          <p className="my-8 text-xl text-white opacity-80 font-light leading-9 lg:text-2xl">
            Registra tu correo para estar al tanto de los cupones de descuento.
          </p>
          <form className="flex flex-col gap-5 lg:w-2/4 lg:items-center">
            <FormInput
              className="bg-third md:h-16"
              placeholder="nombre@komesushi.com"
              type="text"
            />
            <FormButton className="h-16 w-56 text-xl leading-extra lg:w-64 lg:h-20 lg:text-2xl">
              Comienza
            </FormButton>
          </form>
        </section>

        <footer className="w-full flex flex-wrap justify-between items-center py-5 px-10 bg-first md:flex-col lg:flex-row">
          <h4 className="title text-fifth">Komesushi</h4>
          <div className="text-white justify-between items-center flex w-auto mt-6 mb-10 md:mb-0 md:mt-0">
            <ul className="flex font-medium space-x-8 mt-0">
              <li>
                <Link
                  href="#"
                  className="font-light block py-2 pr-4 text-black hover:bg-second lg:hover:bg-transparent lg:hove md:text-2xl r:text-primary-700 lg:p-0 hover:rounded-lg transition uppercase "
                >
                  inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-light block py-2 pr-4 pl-3 text-black hover:bg-second hover:rounded-xl transition md:text-2xl  lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 uppercase "
                >
                  servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-light block py-2 pr-4 pl-3 text-black hover:bg-second hover:rounded-xl transition md:text-2xl  lg:hover:bg-transparentlg:hover:text-primary-700 lg:p-0 uppercase "
                >
                  contacto
                </Link>
              </li>
            </ul>
          </div>
          <ul className="flex gap-5 mb-4 md:self-start md:mb-0">
            <li className="w-10 h-10 bg-fifth rounded-full flex justify-center items-center">
              <CgInstagram className="text-white w-6 h-6 text-center" />
            </li>
            <li className="w-10 h-10 bg-fifth rounded-full flex justify-center items-center">
              <CgFacebook className="text-white w-6 h-6 text-center" />
            </li>
            <li className="w-10 h-10 bg-fifth rounded-full flex justify-center items-center">
              <MdOutlineWhatsapp className="text-white w-6 h-6 text-center" />
            </li>
          </ul>
        </footer>
      </main>
    </>
  );
}

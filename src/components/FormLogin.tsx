"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import FormButton from "./FormButton";

export default function FormLogin() {
  const { register, formState: {errors}, handleSubmit } = useForm();

  const onSubmit = () => {
    
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto gap-8">
        <header className="flex gap-4">
          <Image src="/favicon.png" width={56} height={56} alt="sushi image" />
          <Link href="/" className="title text-white">
          ログイン
          </Link>
        </header>

        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h4 className="text-center text-xl font-light leading-tight tracking-tight text-gray-900 md:text-4xl ">
              Loguea tu cuenta
            </h4>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6 flex flex-col justify-center">
              <div>
                <FormInput
                  className="bg-third"
                  placeholder="nombre@komesushi.com"
                  type="email"
                  required
                />
              </div>
              <div>
                <FormInput
                  className="bg-third"
                  placeholder="••••••••"
                  type="password"
                  required
                />
              </div>
              <FormButton>
                Loguearse
              </FormButton>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                ¿Aun no estas logueado? 
                <Link
                  href="/registrarse"
                  className="hover:scale-110 transition font-medium text-primary-600 hover:underline"
                >
                   Registrate acá
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

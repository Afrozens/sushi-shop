import { ReactNode } from "react";

const ButtonPrimary = ({ children }: { children: ReactNode }) => {
  return (
    <button
      type="submit"
      className="p-5 rounded-[36px] h-16 w-56 outline-none bg-fifth text-white text-xl leading-extra capitalize font-light text-center flex justify-center items-center hover:scale-110 active:scale-90 transition mb-6"
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;

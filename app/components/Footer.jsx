import React from "react";
import Image from "next/image";
import Me from "../../public/images/me.png"

export const Footer = () => {
  return (
    <footer className="footer border border-[#33353F] z-10 border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between text-slate-600">
        <span>
        <Image
              src={Me}
              alt="my image"
              className="object-cover border-2 border-black-900 rounded-15 br-12 mr-15 mb-20 block mx-auto"
              width={80}
              height={80}
            />
        </span>
        <p className="text-slate-600">Oluwafisayo Ibrahim</p>
      </div>
    </footer>
  );
};

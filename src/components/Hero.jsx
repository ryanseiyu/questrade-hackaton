import React from "react";
import Button from "./Button/Button";

const Hero = () => {
  return (
    <section className="text-white h-[72vh]">
      <div className="shape-slider hidden md:block">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
      <div className="max-w-[800px] mt-44 container mx-auto text-center flex flex-col justify-center">
        {/* <p className="text-primary font-bold p-2">
          CRESCENDO COM NÓS
        </p> */}
        <h1 className="hero-text-shadow text-4xl font-bold md:py-6 md:text-7xl sm:text-6xl md:hero-text-shadow-md">
          PLANTE!
        </h1>
        <p className="text-4xl font-bold py-4 outline">
        CRESCENDO JUNTOS
        </p>
        <p className="text-xl px-2 text-white-500 rise md:text-2xl md:px-0">
          Aqui no jardim do sucesso financeiro, nós cultivamos empréstimos que são como sementes promissoras, prontas para florescer e dar frutos abundantes para nossos clientes. Auxiliamos você até as etapas finais do processo para que nossa arvore cresca muito!
        </p>
        <Button classCss="btn-primary my-6 mx-auto px-12 py-3">
          <span className="z-10 relative">Plantar</span>
        </Button>
      </div>
    </section>
  );
};

export default Hero;

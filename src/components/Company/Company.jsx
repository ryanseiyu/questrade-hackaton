import React from "react";
// import Best from "../../assets/best.png";
// import Community from "../../assets/community.png";
// import Reputation from "../../assets/reputation.png";
// import CardItem from "./CardItem";
import Forest from "../../assets/forest.png"

const company = () => {
  return (
    <section className="bg-white pt-4 h-auto grid md:grid-cols-2 max-lg:mb-12">
      <p className="text-primary text-3xl max-sm:py-2 max-lg:ml-0 max-lg:b-32 ml-44 font-bold py-28 max-lg:py-6 px-4">Nossa empresa tem um forte compromisso em conservar a natureza, enquanto maximizamos nossos lucros. Adotamos práticas sustentáveis, reduzindo o impacto ambiental e promovendo a preservação dos recursos naturais, garantindo um futuro sustentável para todos.</p>
      <img src={Forest} alt="" className="w-[500px] max-sm:w-80 mx-auto my-4"/>
      {/* <div className="container mx-auto my-auto py-16 grid md:grid-cols-4 gap-8 px-4">
        <CardItem styleName="card" icon={Best} />
        <CardItem styleName="card active" icon={Community} />
        <CardItem styleName="card" icon={Reputation} />
        <CardItem styleName="card" icon={Best} />
      </div> */}
    </section>
  );
};

export default company;

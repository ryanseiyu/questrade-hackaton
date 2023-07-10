import React from "react";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import Button from "./Button/Button";
import Slider from '@mui/material/Slider';
import { motion } from "framer-motion"


const Analytics = () => {

  const [value, setValue] = React.useState(0);
  const [source, setSource] = React.useState(img1);
  const handleChange = React.useCallback(
    (event, newValue) => {
      setValue(newValue);
      if(newValue > 0 && newValue < 250) {
        setSource(img1)
      }
      else if (newValue > 250 && newValue < 500) {
        setSource(img2)
      }
      else if (newValue > 500 && newValue < 750) {
        setSource(img3)
      }
      else if (newValue > 750 && newValue < 1001) {
        setSource(img4)
      }
    },
    [setValue]
  );


  
  

  return (
    <section className="bg-white">
      {/* <div className="container mx-auto py-16 px-4 grid md:grid-cols-2"> */}
      <div className="container mx-auto px-4 grid md:grid-cols-2">
        <motion.img
          key={source}
          src={source}
          className="w-[500px] mx-auto my-4"
          alt="data analytics"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        />
        <div className="flex flex-col justify-center">
          <p className="text-primary font-bold mt-[32px] text-[24px]">SIMULADOR</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Veja os principais serviços que podemos oferecer de acordo com o valor pretendido.
          </h1>
          <p>
          Quanto maior o seu score, mais benefícios você obtém. Com recursos para gerenciar solicitações de empréstimo, rastrear pagamentos e fornecer suporte aos clientes, oferecemos uma plataforma simplificada que atende às suas necessidades financeiras. Simplifique seu processo de empréstimo, acompanhe seus pagamentos e conte com um suporte especializado.
          </p>
          <p className="md:text-[24px] sm:text-3xl text-sm font-bold py-2">
            Valor do empréstimo
          </p>
          <Slider className="w-[90%] mt-5" valueLabelFormat={value => ("R$ " + value)} min={1000} max={100000} defaultValue={1000} aria-label="Default" valueLabelDisplay="auto" />
          <p className="md:text-[24px] sm:text-3xl text-sm font-bold py-2">
            Score
          </p>
          <p>{value}</p>
          <Slider className="w-[90%] mt-5" min={0} max={1000} defaultValue={500} aria-label="Default" valueLabelDisplay="auto" value={value} onChange={handleChange}/>
          <Button classCss="btn btn-secondary text-primary w-[200px]  my-6 mx-auto md:mx-0 py-3">
            <span className="z-10 relative">Vamos plantar</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Analytics;

import { useState, useEffect } from "react";
import { salonesFiestas } from "../../data/db";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % salonesFiestas.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 4000); // Cambia cada 3 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  return (
    <div className="flex justify-center mt-[6rem] ">
    <div className="relative flex items-center  h-[70vh] overflow-hidden ">
      <div
        className="flex transition-transform duration-500 "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {salonesFiestas.map((salon, index) => (
          <div key={index} className="carousel-item w-full flex-shrink-0">
            <a href={`#salon${index + 1}`}>
              <img
                src={salon.imagen}
                alt={salon.nombre}
                className="object-cover w-full " // Ajusta la altura según sea necesario
              />
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Carousel;

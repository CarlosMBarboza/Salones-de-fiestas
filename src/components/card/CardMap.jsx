// CardDetail.js
import { salonesFiestas } from "../../data/db";
import Card from "./Card"; // Asegúrate de que la ruta sea correcta

const CardMap= () => {
  return (
    <div>
      {salonesFiestas.map((salon, index) => (
        <Card salon={salon} index={index} key={salon.id} />
      ))}
    </div>
  );
};

export default CardMap;

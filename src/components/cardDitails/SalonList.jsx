import { Link } from 'react-router-dom';

// Suponiendo que tienes un componente que lista los salones
const SalonList = ({ salones }) => {
  return (
    <div>
      {salones.map(salon => (
        <div key={salon.id}>
          <Link to={`/salon/${salon.id}`}>
            <h3>{salon.nombre}</h3>
            <img src={salon.imagen} alt={salon.nombre} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SalonList;

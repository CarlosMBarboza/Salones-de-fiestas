import React from 'react';
import { useParams } from 'react-router-dom';
import { salonesFiestas } from '../../constants/salonesFiestas'; // Asegúrate de que la ruta sea correcta

const CardDetail = () => {
  const { id } = useParams();
  const salon = salonesFiestas.find(s => s.id === id); // Buscar el salón por id

  if (!salon) {
    return <div>Salón no encontrado</div>; // Mensaje si no se encuentra el salón
  }

  return (
    <div className="flex flex-col items-center text-gray-600">
      <h2 className="text-2xl font-bold mt-4">{salon.nombre}</h2>
      <img src={salon.imagen} alt={salon.nombre} className="object-cover w-full h-64 rounded-lg mt-4" />
      <p className="mt-2"><strong>Ubicación:</strong> {salon.ubicacion}</p>
      <p className="mt-2"><strong>Capacidad:</strong> {salon.capacidad}</p>
      <p className="mt-2"><strong>Servicios:</strong> {salon.servicios}</p>
      <p className="mt-2"><strong>Descripción:</strong> {salon.descripcion}</p>
    </div>
  );
};

export default CardDetail;

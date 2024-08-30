// Card.js
const Card = ({ salon, index }) => {
  const isEven = index % 2 === 0; // Verifica si el índice es par

  return (
    <div className="place-content-center pl-8  text-gray-600  ">
    <div className={`card ${isEven ? 'lg:card-side' : 'lg:card-side-reverse pl-24'} bg-base-200 shadow-xl hover:shadow-2xl  flex w-[75rem] h-[18rem] rounded-3xl mt-[3rem] `  }>
      {isEven ? (
        <div className=" flex ">
          <figure className="w-1/2 ">
            <img src={salon.imagen} alt={salon.nombre} className="object-cover w-[40rem]  h-full rounded-l-3xl" />
          </figure>
          <div className="card-body text-center px-14 ">
            <h2 className="card-title mt-3">{salon.nombre}</h2>
            <p className="p-2">{salon.ubicacion}</p>
            <p className="p-2">{salon.capacidad}</p>
            <p className="p-2">{salon.servicios}</p>
            <p className="p-2">{salon.descripcion}</p>
            <div className="card-actions justify-end px-5">
            <button type="button" className="text-white bg-gradient-to-br from-gray-600 to-gray-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Ver más</button>
            </div>
          </div>
        </div>
      ) : (
        <div  className="flex  ">
          <div className="card-body text-center px-14 ">
          <h2 className="card-title  mt-3">{salon.nombre}</h2>
            <p className="p-2">{salon.ubicacion}</p>
            <p className="p-2">{salon.capacidad}</p>
            <p className="p-2">{salon.servicios}</p>
            <p className="p-2">{salon.descripcion}</p>
            <div className="card-actions justify-end">
            </div>
            <button type="button" className="text-white bg-gradient-to-br from-gray-600 to-gray-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Ver más</button>
          </div>
          <figure  >
            <img src={salon.imagen} alt={salon.nombre} className="object-cover w-[40rem] h-full rounded-r-3xl" />
          </figure>
        </div>
      )}
    </div>
    </div>
  );
};

export default Card;

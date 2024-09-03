import { NavItem } from "./NavItem";
import { navLinks } from "../../constants/navBar";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between bg-base-200 shadow-xl hover:shadow-2xl p-4 sm:p-6 border bg-gradient-to-b from-gray-200 via-gray-100 to-gray-100">
      <div className="flex items-center text-gray-700">
        <span className="font-semibold text-xl tracking-tight">Fiestas Con Estilo</span>
      </div>
      <div className="flex space-x-4">
        {navLinks.map((route, index) => (
          <NavItem key={index} route={route} className="text-gray-600 hover:text-gray-900 transition duration-300" />
        ))}
      </div>
      <div className="lg:hidden">
        {/* Aquí puedes agregar un botón de menú para móviles si lo deseas */}
      </div>
    </nav>
  );
};

export default Navbar;

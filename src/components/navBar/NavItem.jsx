import { NavLink } from "react-router-dom";


export const NavItem = ({ route }) => {
  const { link, text } = route;

  if (!link || !text) {
    throw new Error("route object must contain 'link' and 'text' properties");
  }

  return (
    <NavLink
      to={link}
      className={({ isActive }) => 
        `text-gray-600 hover:text-red-900 transition duration-300 p-2 rounded ${isActive ? "active bg-gray-200" : ""}`
      }
    >
      {text}
    </NavLink>
  );
};

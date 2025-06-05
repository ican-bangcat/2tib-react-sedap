import { AiOutlineUser } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";
import { AiTwotoneCustomerService } from "react-icons/ai";
import { VscListFlat } from "react-icons/vsc";
import { MdDashboard, MdFastfood } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
export default function ListMenu() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4  space-x-2
    ${
      isActive
        ? "text-hijau bg-green-200 font-extrabold"
        : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }`;
  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <li>
          <NavLink id="menu-1" to="/" className={menuClass}>
            <MdDashboard className="mr-4 text-xl" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-2" to="/orders" className={menuClass}>
            <VscListFlat className="mr-4 text-xl" />
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-3" to="/customers" className={menuClass}>
            <AiTwotoneCustomerService className="mr-4 text-xl" />
            Customers
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-7" to="/users" className={menuClass}>
            <AiOutlineUser className="mr-4 text-xl" />
            Users
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-8" to="/products" className={menuClass}>
            <MdFastfood className="mr-4 text-x1" />
            Products
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-4" to="/error/400" className={menuClass}>
            <RiErrorWarningFill className="mr-4 text-xl" />
            Error 400
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-5" to="/error/401" className={menuClass}>
            <RiErrorWarningFill className="mr-4 text-xl" />
            Error 401
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-6" to="/error/403" className={menuClass}>
            <RiErrorWarningFill className="mr-4 text-xl" />
            Error 403
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

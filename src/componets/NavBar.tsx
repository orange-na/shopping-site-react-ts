import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function NavBar() {
  return (
    <div className="h-[85px] flex items-center shadow-md bg-white">
      <div className="flex items-center justify-between w-full px-[30px]">
        <ul className="flex items-center gap-[20px]">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
        </ul>
        <div className="relative">
          <button className="border border-gray-800 p-[15px] rounded-full hover:bg-gray-200 duration-200">
            <ShoppingCartOutlinedIcon />
          </button>
          <div className="absolute bg-red-500 p-[10px] rounded-full bottom-0 right-0 w-[15px] h-[15px] flex items-center justify-center text-[12px] text-white">
            1
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

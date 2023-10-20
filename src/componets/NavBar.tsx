import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";

function NavBar() {
  const { isOpen, openCart, removeQuantity, getItemQuantity, cartItems } =
    useContext(ShoppingCartContext);

  console.log(storeItems);
  const cartItemsData = storeItems.filter((storeItem) => {
    return cartItems.some((cartItem) => cartItem.id === storeItem.id);
  });

  const totalPrice = cartItemsData
    .map((item) => {
      return getItemQuantity(item.id) * item.price;
    })
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const totalQuantity = cartItemsData
    .map((item) => {
      return getItemQuantity(item.id);
    })
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  console.log(totalQuantity);

  console.log(cartItemsData);

  const showCart = () => {
    openCart();
    console.log(isOpen);
  };
  return (
    <div>
      <div className="h-[85px] flex items-center shadow-md bg-white">
        <div className="flex items-center justify-between w-full px-[30px]">
          <ul className="flex items-center gap-[20px]">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-black duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-black duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/store"
                className="text-gray-700 hover:text-black duration-200"
              >
                Store
              </Link>
            </li>
          </ul>
          <div className="relative">
            <button
              className="border border-gray-800 p-[15px] rounded-full hover:bg-gray-200 duration-200"
              onClick={showCart}
            >
              <ShoppingCartOutlinedIcon />
            </button>
            <div className="absolute bg-red-500 p-[12px] rounded-full bottom-[-5px] right-0 w-[15px] h-[15px] flex items-center justify-center text-[12px] text-white">
              {totalQuantity}
            </div>
          </div>
        </div>
      </div>
      {isOpen ? (
        <div className="absolute w-full h-full">
          <div
            className="absolute w-full h-full bg-[#858585ad] cursor-pointer"
            onClick={() => showCart()}
          ></div>
          <div className="bg-white h-full w-[400px] absolute right-0 border-t border-gray-200 z-20">
            <div className="flex items-center justify-between px-[10px] pt-[10px]">
              <p className="text-[30px] font-[600]">Cart</p>
              <button className="text-[20px]" onClick={() => showCart()}>
                X
              </button>
            </div>

            {cartItemsData.map((item) => {
              return (
                <div
                  className="flex items-center justify-between p-[10px]"
                  key={item.id}
                >
                  <div className="flex items-center gap-[10px]">
                    <img
                      src={item.imgUrl}
                      alt=""
                      className="w-[50%] rounded-md"
                    />
                    <div className="flex flex-col">
                      <span>
                        {item.name}
                        <span className="text-[12px] text-gray-600 pl-[5px]">
                          x {getItemQuantity(item.id)}
                        </span>
                      </span>
                      <span className="text-gray-600 text-[15px]">
                        ${item.price}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-[10px]">
                    <p className="">${item.price * getItemQuantity(item.id)}</p>
                    <button
                      className="text-red-300 border border-red-300 px-[7px] rounded-[3px] hover:bg-red-100 duration-200"
                      onClick={() => removeQuantity(item.id)}
                    >
                      x
                    </button>
                  </div>
                </div>
              );
            })}
            <p className="font-[600] text-right text-[20px] pr-[10px]">
              Total: ${totalPrice}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default NavBar;

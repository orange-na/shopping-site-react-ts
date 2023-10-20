import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    increaseCartItem,
    decreaseCartItem,
    getItemQuantity,
    removeQuantity,
    cartItems,
  } = useContext(ShoppingCartContext);
  console.log(cartItems);

  const handleAddToCart = (id: number) => {
    increaseCartItem(id);
  };

  const quantity = getItemQuantity(id);

  const handleDecrese = (id: number) => {
    decreaseCartItem(id);
  };
  return (
    <>
      <div className="h-[250px]">
        <img src={imgUrl} alt="" className="w-full object-cover h-[250px]" />
      </div>
      <div className="flex items-center justify-between px-[10px] py-[20px]">
        <p className="text-[25px]">{name}</p>
        <p className="text-[20px]">${price}</p>
      </div>
      <div className="px-[10px]">
        {quantity === 0 ? (
          <button
            className="bg-slate-900 py-[5px] w-full hover:bg-slate-700 duration-200 rounded-sm text-white text-[15px]"
            onClick={() => handleAddToCart(id)}
          >
            + Add To Cart
          </button>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-[10px]">
              <button
                className="bg-slate-900 px-[15px] py-[5px] rounded-sm text-white"
                onClick={() => handleDecrese(id)}
              >
                -
              </button>
              <span>{quantity} in cart</span>
              <button
                className="bg-slate-900 px-[15px] py-[5px] rounded-sm text-white"
                onClick={() => handleAddToCart(id)}
              >
                +
              </button>
            </div>
            <button
              className="bg-white text-red-400 border border-red-400 px-[10px] py-[5px] rounded-sm mt-[10px] text-[15px] hover:bg-red-400 hover:text-white duration-200"
              onClick={() => removeQuantity(id)}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default StoreItem;

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
      <img src={imgUrl} alt="" />
      <div className="flex items-center justify-between">
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <div>
        {quantity === 0 ? (
          <button
            className="bg-blue-300 py-[5px] w-full hover:bg-blue-400 duration-200 rounded-md"
            onClick={() => handleAddToCart(id)}
          >
            + Add To Cart
          </button>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-[10px]">
              <button
                className="bg-blue-300 p-[10px] rounded-md"
                onClick={() => handleDecrese(id)}
              >
                -
              </button>
              <span>{quantity} in cart</span>
              <button
                className="bg-blue-300 p-[10px] rounded-md"
                onClick={() => handleAddToCart(id)}
              >
                +
              </button>
            </div>
            <button
              className="bg-red-300 p-[10px] rounded-md"
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

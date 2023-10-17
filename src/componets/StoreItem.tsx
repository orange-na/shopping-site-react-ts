type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  return (
    <>
      <img src={imgUrl} alt="" />
      <div className="flex items-center justify-between">
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </>
  );
}

export default StoreItem;

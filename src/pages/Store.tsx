import StoreItem from "../componets/StoreItem";
import storeItems from "../data/items.json";

function Store() {
  return (
    <div className="py-[20px] px-[20px]">
      <div className="grid grid-cols-3 gap-x-[20px] gap-y-[40px]">
        {storeItems.map((storeItem) => {
          return (
            <div key={storeItem.id} className="bg-white shadow-lg pb-[30px]">
              <StoreItem {...storeItem} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Store;

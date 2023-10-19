import StoreItem from "../componets/StoreItem";
import storeItems from "../data/items.json";

function Store() {
  return (
    <div className="py-[20px] px-[20px]">
      <div className="grid grid-cols-3 gap-x-[20px]">
        {storeItems.map((storeItem) => {
          return (
            <div key={storeItem.id}>
              <StoreItem {...storeItem} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Store;

import StoreItem from "../componets/storeItem";
import storeItems from "../data/items.json";

function Store() {
  return (
    <div>
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

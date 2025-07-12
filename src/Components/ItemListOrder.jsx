import ItemOrder from "./ItemOrder";

export default function ItemListOrder({
  items,
  imageDirectory,
  addOrder,
  subtractOrder,
  useTwoColumns,
  nbrItemOrdered,
}) {
  return (
    <div
      className={useTwoColumns === 1 ? "flex-container2" : "flex-container1"}
    >
      {items.map(function (item) {
        return (
          <ItemOrder
            itemData={item}
            imageDirectory={imageDirectory}
            addOrder={addOrder}
            subtractOrder={subtractOrder}
            nbrItemOrdered={nbrItemOrdered}
            key={item.id}
          />
        );
      })}
    </div>
  );
}

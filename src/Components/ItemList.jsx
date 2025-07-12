import Item from "./Item";

export default function ItemList({ items, imageDirectory }) {
  return (
    <div className="flex-container2">
      {items.map(function (item, index) {
        return (
          <Item item={item} imageDirectory={imageDirectory} key={item.id} />
        );
      })}
    </div>
  );
}

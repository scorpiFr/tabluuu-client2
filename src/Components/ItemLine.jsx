import ItemList from "./ItemList";

export default function ItemLine({ line, imageDirectory }) {
  return (
    <>
      <div className="lineHeader">{line.name}</div>
      <ItemList
        items={line.items}
        imageDirectory={imageDirectory}
        key={line.id}
      />
    </>
  );
}

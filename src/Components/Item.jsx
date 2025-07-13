export default function Item({ item, imageDirectory }) {
  if (item.image) {
    return item.image_mode === "vertical" ? (
      <ItemVertical item={item} imageDirectory={imageDirectory} />
    ) : (
      <ItemHorizontal item={item} imageDirectory={imageDirectory} />
    );
  }

  return <ItemNoimage item={item} />;
}

function ItemNoimage({ item }) {
  return (
    <div className="cadre">
      <div className="texte">
        <p className="itemTitle">
          {item.name} - {item.price} €
        </p>
        {item.description.length > 0 && (
          <p className="itemDescription">{item.description}</p>
        )}
      </div>
    </div>
  );
}

function ItemVertical({ item, imageDirectory }) {
  const miniatureUrl = item.miniature ? item.miniature : item.image;
  return (
    <div className="cadre">
      <div className="image">
        <a
          href={`${imageDirectory}${item.image}`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="itemPreview"
            src={`${imageDirectory}${miniatureUrl}`}
            alt="Item"
          />
        </a>
      </div>

      <div className="texte">
        <p className="itemTitle">{item.name}</p>
        {item.description.length > 0 && (
          <p className="itemDescription">{item.description}</p>
        )}
        <p className="itemPrice">{item.price} €</p>
      </div>
    </div>
  );
}

function ItemHorizontal({ item, imageDirectory }) {
  const miniatureUrl = item.miniature ? item.miniature : item.image;
  return (
    <div className="cadre">
      <div className="texte">
        <div>
          <a
            href={`${imageDirectory}${item.image}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="itemPreviewHorizontal"
              src={`${imageDirectory}${miniatureUrl}`}
              alt="Item"
            />
          </a>
        </div>
        <p className="itemTitle">
          {item.name} - {item.price} €
        </p>
        {item.description.length > 0 && (
          <p className="itemDescription">{item.description}</p>
        )}
      </div>
    </div>
  );
}

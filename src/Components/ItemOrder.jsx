import { useState } from "react";

export default function ItemOrder({
  itemData,
  imageDirectory,
  addOrder,
  subtractOrder,
  nbrItemOrdered,
}) {
  // eslint-disable-next-line
  const [tmp, setTmp] = useState(0);
  function handleAddOrder() {
    addOrder(itemData.id);
    setTmp((t) => t + 1);
  }
  function handleSubstractOrder() {
    subtractOrder(itemData.id);
    setTmp((t) => t + 1);
  }
  if (itemData.image) {
    return itemData.image_mode === "vertical" ? (
      <ItemVertical
        itemData={itemData}
        imageDirectory={imageDirectory}
        nbrItemOrdered={nbrItemOrdered}
        handleAddOrder={handleAddOrder}
        handleSubstractOrder={handleSubstractOrder}
      />
    ) : (
      <ItemHorizontal
        itemData={itemData}
        imageDirectory={imageDirectory}
        nbrItemOrdered={nbrItemOrdered}
        handleAddOrder={handleAddOrder}
        handleSubstractOrder={handleSubstractOrder}
      />
    );
  }

  return (
    <ItemNoImage
      itemData={itemData}
      nbrItemOrdered={nbrItemOrdered}
      handleAddOrder={handleAddOrder}
      handleSubstractOrder={handleSubstractOrder}
    />
  );
}

function ItemNoImage({
  itemData,
  nbrItemOrdered,
  handleAddOrder,
  handleSubstractOrder,
}) {
  return (
    <div className="cadre">
      <div className="texte">
        <p className="itemTitle">
          {itemData.name} - {itemData.price} €
        </p>
        {itemData.description.length && (
          <p className="itemDescription">{itemData.description}</p>
        )}
        <ItemButtons
          itemData={itemData}
          nbrItemOrdered={nbrItemOrdered}
          handleAddOrder={handleAddOrder}
          handleSubstractOrder={handleSubstractOrder}
        />
      </div>
    </div>
  );
}

function ItemVertical({
  itemData,
  imageDirectory,
  nbrItemOrdered,
  handleAddOrder,
  handleSubstractOrder,
}) {
  // render functions
  const miniatureRelativeUrl = itemData.miniature
    ? itemData.miniature
    : itemData.image;

  return (
    <div className="cadre">
      <div className="image">
        <a
          href={`${imageDirectory}${itemData.image}`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="itemPreview"
            src={`${imageDirectory}${miniatureRelativeUrl}`}
            alt={`Item ${itemData.id}`}
          />
        </a>
      </div>
      <div className="texte">
        <p className="itemTitle">{itemData.name}</p>
        {itemData.description.length && (
          <p className="itemDescription">{itemData.description}</p>
        )}
        <p className="itemPrice">{itemData.price} €</p>
        <ItemButtons
          itemData={itemData}
          nbrItemOrdered={nbrItemOrdered}
          handleAddOrder={handleAddOrder}
          handleSubstractOrder={handleSubstractOrder}
        />
      </div>
    </div>
  );
}

function ItemHorizontal({
  itemData,
  imageDirectory,
  nbrItemOrdered,
  handleAddOrder,
  handleSubstractOrder,
}) {
  // render functions
  const miniatureRelativeUrl = itemData.miniature
    ? itemData.miniature
    : itemData.image;

  return (
    <div className="cadre">
      <div className="texte">
        <div>
          <a
            href={`${imageDirectory}${itemData.image}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="itemPreview"
              src={`${imageDirectory}${miniatureRelativeUrl}`}
              alt={`Item ${itemData.id}`}
            />
          </a>
        </div>
        <p className="itemTitle">
          {itemData.name} - {itemData.price} €
        </p>
        {itemData.description.length && (
          <p className="itemDescription">{itemData.description}</p>
        )}
        <ItemButtons
          itemData={itemData}
          nbrItemOrdered={nbrItemOrdered}
          handleAddOrder={handleAddOrder}
          handleSubstractOrder={handleSubstractOrder}
        />
      </div>
    </div>
  );
}

function ItemButtons({
  itemData,
  nbrItemOrdered,
  handleAddOrder,
  handleSubstractOrder,
}) {
  return (
    <div className="buttons">
      {itemData.qty === 0 ? (
        <button className="button-20" onClick={() => handleAddOrder()}>
          {nbrItemOrdered > 0 ? "Ajouter" : "Commander"}
        </button>
      ) : (
        <>
          <button className="button-20" onClick={() => handleSubstractOrder()}>
            -
          </button>
          &nbsp;{itemData.qty}&nbsp;
          <button className="button-20" onClick={() => handleAddOrder()}>
            +
          </button>
        </>
      )}
    </div>
  );
}

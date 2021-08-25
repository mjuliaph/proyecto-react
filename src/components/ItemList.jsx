import Item from "./Item";

function ItemList({ butacas }) {
  return (
    <>
      {butacas.map((item) => (
        <Item {...item} />
      ))}
    </>
  );
}

export default ItemList;

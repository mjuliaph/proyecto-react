import Item from "./Item";

function ItemList({ products }) {
  return (
    <>
      {products.map((item) => (
        <Item {...item} />
      ))}
    </>
  );
}

export default ItemList;

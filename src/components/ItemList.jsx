import Item from "./Item";

function ItemList({ products }) {
  return (
    <>
      {products.map((item) => (
        <Item {...item} key={item.id} />
         ))}
    </>
  );
}

export default ItemList;

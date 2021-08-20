import Item from "./item";

function ItemList({ butacas }) {
  return (
    <div>
      {butacas.map((item) => (
        <Item {...item} />
      ))}
    </div>
  );
}

export default ItemList;

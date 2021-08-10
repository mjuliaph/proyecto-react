import ItemCount from "./ItemCount";

function Count() {
  return (
    <>
      <div>
        <ItemCount stock={5} initial={0} />
      </div>
    </>
  );
}

export default Count;

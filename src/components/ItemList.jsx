import Item from "./Item.jsx";
const { useEffect, useState } = require("react");

function ItemList() {
  const [sits, setSits] = useState([]);

  useEffect(() => {
    new Promise((resolve, reject) => {
      const datos = [
        {
          id: "1",
          fila: "A",
          numero: "1",
          description: "butaca A1",
          price: "$500",
        },
        {
          id: "2",
          fila: "B",
          numero: "2",
          description: "butaca B2",
          price: "$500",
        },
        {
          id: "3",
          fila: "C",
          numero: "3",
          description: "butaca C3",
          price: "$500",
        },
        {
          id: "4",
          fila: "D",
          numero: "4",
          description: "butaca D4",
          price: "$500",
        },
        {
          id: "5",
          fila: "E",
          numero: "5",
          description: "butaca E5",
          price: "$500",
        },
      ];
      setTimeout(() => resolve(datos), 2000);
    })
      .then((datosResolve) => {
        console.log("datos Resolve", datosResolve);
        setSits(datosResolve);
      })
      .catch((error) => {
        console.log("err", error);
      });
  }, []);

  return (
    <div className="flex">
      {sits.map((cadaAsiento) => (
        <Item {...cadaAsiento} />
      ))}
    </div>
  );
}

export default ItemList;

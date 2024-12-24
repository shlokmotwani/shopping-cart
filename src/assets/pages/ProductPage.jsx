import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import "../styles/product-page.css";
import { useOutletContext } from "react-router-dom";

function ProductPage() {
  const [data, setData] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);

  const [itemsInCart, setItemsInCart] = useOutletContext();
  console.log(itemsInCart);
  // const [cart, setCart] = useState(itemsInCart);

  function handleAdd(item, quantity) {
    setItemsInCart((prev) => [...prev, { item: item, quantity: quantity }]);
  }

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        let items = [];
        res.products.map((item) => {
          items = [
            ...items,
            {
              id: item.id,
              title: item.title,
              description: item.description,
              price: item.price,
              thumbnailURL: item.thumbnail,
            },
          ];
        });
        setData(items);
        setDataFetched(true);
        // return items;
      });

    () => {
      setDataFetched(false);
      setData(null);
    };
  }, []);

  return (
    <div>
      {!dataFetched && <h1>Loading...</h1>}

      <div id="cards-wrapper">
        {dataFetched &&
          data.map((product, index) => {
            return <Card key={index} item={product} handleAdd={handleAdd} />;
          })}
      </div>
    </div>
  );
}

export { ProductPage };

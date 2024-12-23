import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import "../styles/product-page.css"

function ProductPage() {
  const [dataFetched, setDataFetched] = useState(false);
  const [data, setData] = useState(null);
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
        setDataFetched(true);
        setData(items);
        return items;
      });

    () => {
      setDataFetched(false);
      setData(null);
    };
  }, []);

  return (
    <div>
      <h1>This page displays products</h1>
      {!dataFetched && <h1>Data NOT fetched yet</h1>}


      <div id="cards-wrapper">
          {dataFetched &&
            data.map((product, index) => {
              return <Card key={index} item={product} />;
            })}
      </div>
    </div>
  );
}

export { ProductPage };

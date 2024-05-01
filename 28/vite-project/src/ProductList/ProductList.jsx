import { useState } from "react";
import { Product } from "../Product";
const DATA = [
  {
    id: "1",
    title: "Product 1",
    text: "text 1",
  },
];

export const ProductList = () => {
  const [products, setProducts] = useState(DATA);
  const [values, setValues] = useState({
    title: "",
    text: "",
  });

  //   const sortedProducts = (list) => {
  //     return list.sort((item))
  //   }

  const addProduct = () => {
    setProducts((prevState) => [
      ...prevState,
      {
        id: Math.random().toString(),
        title: values.title,
        text: values.text,
      },
    ]);
  };

  const onDelete = (id) => {
    setProducts((prevState) =>
      prevState.filter((product) => product.id !== id)
    );
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="title"
          value={values.title}
          onChange={(e) =>
            setValues((prevState) => ({ ...prevState, title: e.target.value }))
          }
        />
        <input
          type="text"
          name="text"
          value={values.text}
          onChange={(e) =>
            setValues((prevState) => ({ ...prevState, text: e.target.value }))
          }
        />

        <button onClick={addProduct}>add product</button>
      </div>
      <ul>
        {sortedProducts(products).map((item) => (
          <Product key={item.id} product={item} onDelete={onDelete} />
        ))}
      </ul>
    </>
  );
};

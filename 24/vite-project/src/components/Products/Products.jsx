import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { ProductsData } from "../../data";
import { v4 } from "uuid";

export const Products = () => {
  const [products, setProduct] = useState(ProductsData);
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  const [searchValue, setSearchValue] = useState("");
  const [findProduct, setFindProduct] = useState({});

  const addProduct = () => {
    setProduct([...products, { id: v4(), title: value }]);

    setProduct((prevState) => {
      return [
        ...prevState,
        {
          id: v4(),
          title: value,
        },
      ];
    });
  };

  const findProductFunc = useMemo(
    (value) => {
      const result = products.find((item) => item.title === value);
      console.log(result, "findProductFunc");
      return result;
    },
    [products]
  );

  useEffect(() => {
    console.log("useEffect");
  }, [products]);

  const setFocus = () => {
    console.log(inputRef);
    inputRef.current.focus();
  };

  //   findProductFunc;

  return (
    <>
      <h2>Counter{count}</h2>
      <h2>Products</h2>
      <ul>
        {products.map(({ id, title }) => (
          <div className="product" key={id}>
            <p className="product-title">{title}</p>
          </div>
        ))}
      </ul>
      <input type="text" ref={inputRef} />
      <Input
        type="text"
        className="input"
        placeholder="add"
        onChange={(event) => setValue(event.target.value)}
      />
      <Input
        type="text"
        className="input"
        placeholder="search"
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <Button onClick={() => addProduct()}>add product</Button>
      <Button onClick={() => setFocus()}>set focus on input</Button>

      <div>
        search product: {JSON.stringify(findProductFunc)}
        <Button
          onClick={() => {
            setFindProduct(findProductFunc);
          }}
        >
          search
        </Button>
      </div>
      <div>
        <Button onClick={() => setCount(count + 1)}>count</Button>
      </div>
    </>
  );
};

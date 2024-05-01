export const Product = ({ product, onDelete }) => {
  return (
    <li>
      <h3>{product.title}</h3>
      <p>{product.text}</p>
      <button onClick={() => onDelete(product.id)}>delete</button>
    </li>
  );
};

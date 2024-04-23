import "./Button.css";

export const Button = ({ size = "", onClick, children }) => {
  return (
    <button className={`btn ${size}`} onClick={() => onClick("id from btn")}>
      {children}
    </button>
  );
};

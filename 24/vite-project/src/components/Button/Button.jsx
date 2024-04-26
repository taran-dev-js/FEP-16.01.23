import "./Button.css";

export const Button = ({ size = "", onClick, children }) => {
  // console.log("render btn");
  return (
    <button className={`btn ${size}`} onClick={() => onClick("id from btn")}>
      {children}
    </button>
  );
};

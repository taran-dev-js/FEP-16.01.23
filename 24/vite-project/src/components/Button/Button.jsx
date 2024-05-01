import "./Button.css";

export const Button = ({ size = "", onClick, children, ...props }) => {
  // console.log("render btn");
  return (
    <button className={`btn ${size}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

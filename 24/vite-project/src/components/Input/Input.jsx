import "./styles.css";

export const Input = ({ onChange, ...props }) => {
  return <input className="input" onChange={onChange} {...props} />;
};

import { useRouteError, Link } from "react-router-dom";

export const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Erroe Page!!!</h1>
      <p>{error.error.message}</p>
      <Link to={"/"}>Go to home</Link>
    </div>
  );
};

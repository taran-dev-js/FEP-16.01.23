import { memo } from "react";

export const Button = memo(({ handler }) => {
  console.log("Random Btn render");
  return (
    <button type="submit" onClick={handler}>
      Random Btn {JSON.stringify(handler)}
    </button>
  );
});

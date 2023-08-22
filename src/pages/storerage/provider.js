import { useReducer } from "react";
import { Context } from "./context";

import reducer, { init } from "./reuducer";
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, init);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};
export default Provider;

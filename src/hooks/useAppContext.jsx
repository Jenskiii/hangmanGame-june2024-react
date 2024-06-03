import { useContext } from "react";
import { AppContext } from "../context/AppProvider";


export function useAppContext() {
  const value = useContext(AppContext);

  if (value == null) {
    throw new Error("item has to be within <AppProvider>");
  }

  return value;
}
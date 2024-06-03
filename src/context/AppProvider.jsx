import { createContext, useState } from "react";

// create context
export const AppContext = createContext(null);

// create provider / will return children
// in this instance it returns <App>
export function AppProvider({ children }) {
  const [isUsedLetter, setIsUsedLetter] = useState([]);

   //  adds letter to array
   function pushToArray(value) {
    setIsUsedLetter([...isUsedLetter, value]);
  }

  //  searches if letter is inside array and returns true if found
  function findLetter(value) {
    if (isUsedLetter.includes(value)) {
      return true;
    }
  }
  return (
    <>
      <AppContext.Provider value={{ isUsedLetter, setIsUsedLetter , pushToArray, findLetter}}>
        {children}
      </AppContext.Provider>
    </>
  );
}

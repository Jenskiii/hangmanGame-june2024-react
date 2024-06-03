import { useEffect, useState } from "react";
import { Key } from "../Key/Key";
import { alphabet } from "../../utilities/alphabet";
import { useAppContext } from "../../hooks/useAppContext";

// COMPONENT
export function Keyboard() {
  const { pushToArray, findLetter } = useAppContext();
  // typed letter
  const [typedLetter, setTypedLetter] = useState();

  function handleKeyPress(e) {
    //  searches value inside a object
    const hasValue = (obj, value) => Object.values(obj).includes(value);

    // if pressed key is inside alphabet , store it inside var
    if (hasValue(alphabet, e.key.toUpperCase())) {
      setTypedLetter(e.key.toUpperCase());
    }
  }

  // adds type event to document + removes it afterwards
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  // if letter is typed will push it to the array
  useEffect(() => {
    if (typedLetter && findLetter(typedLetter) !== true) {
      pushToArray(typedLetter);
    }
  }, [typedLetter]);

  return (
    <div className="keyboard">
      {alphabet.map((alphabetLetter) => {
        return (
          <Key
            key={crypto.randomUUID()}
            alphabetLetter={alphabetLetter}
            typedLetter={typedLetter}
          />
        );
      })}

      {/* just for show */}
      <p>Pressed key = {typedLetter}</p>
    </div>
  );
}

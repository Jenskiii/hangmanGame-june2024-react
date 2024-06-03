import { useAppContext } from "../../hooks/useAppContext";

export function Key({ alphabetLetter }) {
  const { pushToArray, findLetter } = useAppContext();

  return (
    <>
      <button
        value={alphabetLetter}
        onClick={(e) => pushToArray(e.target.value)}
        disabled={findLetter(alphabetLetter)}
      >
        {alphabetLetter}
      </button>
    </>
  );
}

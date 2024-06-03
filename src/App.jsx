import { Keyboard } from "./components/Keyboard/Keyboard";
import { useAppContext } from "./hooks/useAppContext";

function App() {
  //  chose to use usecontext for this otherwise all keys
  //  would have needed a isClicked and setIsClicked prop
  const { isUsedLetter } = useAppContext();

  return (
    <>
      {/* loop over all clicked letters */}
      <div className="flex">
        {isUsedLetter.map((item) => {
          return <p key={crypto.randomUUID()}>{item}</p>;
        })}
      </div>

      <Keyboard />
    </>
  );
}

export default App;

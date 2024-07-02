import { useEffect,useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [correction, setCorrection] = useState("");

  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

  useEffect(() => {
    const words = text.toLowerCase().split(" ");
    for (let word of words) {
      if (customDictionary[word]) {
        setCorrection(`Did you mean: ${customDictionary[word]}?`);
        return; 
      }
    }
    setCorrection("");
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <div>
        <h1>Spell Checking and Auto-Correction</h1>
      </div>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter text..."
        rows={4}
        cols={50}
      />
      {correction && <div>{correction}</div>}
    </div>
  );
}

export default App;

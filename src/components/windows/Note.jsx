import React, { useEffect, useState } from "react";
import MacWindows from "./MacWindows";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
const Note = () => {
  const [markDown, setmarkDown] = useState(null);
  useEffect(() => {
    fetch("/note.txt")
      .then((res) => res.text())
      .then((text) => setmarkDown(text));
  }, []);
  return (
    <MacWindows height={450}>
      {" "}
      <div className="note_window">
        {markDown ? (
          <SyntaxHighlighter language="typescript" style={atelierDuneDark}>
            {markDown}{" "}
          </SyntaxHighlighter>
        ) : (
          <p>Loading...</p>
        )}{" "}
      </div>{" "}
    </MacWindows>
  );
};
export default Note;

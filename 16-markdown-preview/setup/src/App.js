import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState("## markdown preview");
  return (
    <main>
      <section className="markdown">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={markdown}
          className="input"
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className="result">{markdown}</article>
      </section>
    </main>
  );
}

export default App;

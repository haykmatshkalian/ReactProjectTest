import React from "react";
import "./style.css";
import { LoremIpsum } from "react-lorem-ipsum";

function Main() {
  return (
    <div>
      <main>
        <section>
          <h2>Title</h2>
          <LoremIpsum p={2} />
        </section>
        <button className="minimal-button" onClick={() => alert('Barev')}>
            Barev
        </button>
      </main>
    </div>
  );
}

export default Main;

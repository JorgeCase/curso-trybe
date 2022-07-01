/* 🚀 Para fixar, crie um elemento JSX que recebe o valor "Hello, JSX" de uma constante chamada textJSX, e o incorpore em uma tag h1. */
import React from "react";

const textJSX = "Hello, JSX";
const ElementH1 = <h1>{textJSX}</h1>;

export default function App() {
  return (
    <div className="App">{ElementH1}</div>
  )
}
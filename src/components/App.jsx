import * as Plot from "@observablehq/plot";
import PlotFigure from "./PlotFigure.js";
import penguins from "./penguins.json";

export default function App() {
  return (
    <div>
      <h1>Penguins</h1>
      <PlotFigure
        options={{
            title: "Penguins",
            subtitle: "par espèce, et masse",
            caption: "Graph 1.",

             ariaLabel: "Penguins",

          marks: [
            Plot.dot(penguins, {x: "Species", y: "Body Mass (g)"})
          ]
        }}
      />
    </div>
  );
}
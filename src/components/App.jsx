import * as Plot from "@observablehq/plot";
import PlotFigure from "./PlotFigure.js";
import penguins from "./penguins.json";

export default function App() {
  return (
    <div>
      <h1>Penguins</h1>
      <PlotFigure
        options={{
            title: "For charts, an informative title",
            subtitle: "Subtitle to follow with additional context",
            caption: "Figure 1. A chart with a title, subtitle, and caption.",

             ariaLabel: "label sur le svg lui même",

          marks: [
            Plot.dot(penguins, {x: "culmen_length_mm", y: "culmen_depth_mm"})
          ]
        }}
      />
    </div>
  );
}
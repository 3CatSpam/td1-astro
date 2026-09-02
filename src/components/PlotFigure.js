import * as Plot from '@observablehq/plot';
import { JSDOM } from 'jsdom';
import { createElement } from 'react';

export default function PlotFigure({ options }) {
  const { document } = new JSDOM('<!doctype html><html><body></body></html>').window;
  const plot = Plot.plot({ ...options, document });

  return createElement('div', {
    dangerouslySetInnerHTML: {
      __html: plot.outerHTML
    }
  });
}
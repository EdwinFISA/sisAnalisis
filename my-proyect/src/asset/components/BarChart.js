import React, { useEffect } from 'react';
import anychart from 'anychart';
import '../style/graficas.css';

const BarChart = () => {
  useEffect(() => {
    anychart.onDocumentReady(function () {
      var chart = anychart.bar();
      chart.animation(true);
      chart.padding([10, 40, 5, 20]);
      chart.title('Top 10 Cosmetic Products by Revenue');
      var series = chart.bar([
        ['Eyeshadows', '249980'],
        ['Eyeliner', '213210'],
        ['Eyebrow pencil', '170670'],
        ['Nail polish', '143760'],
        ['Lipstick', '128000'],
        ['Lip gloss', '110430'],
        ['Mascara', '102610'],
        ['Foundation', '94190'],
        ['Rouge', '80540'],
        ['Powder', '53540']
      ]);
      series.tooltip().position('right').anchor('left-center').offsetX(5).offsetY(0).titleFormat('{%X}').format('${%Value}');
      chart.yAxis().labels().format('{%Value}{groupsSeparator: }');
      chart.xAxis().title('Products by Revenue');
      chart.yAxis().title('Revenue in Dollars');
      chart.interactivity().hoverMode('by-x');
      chart.tooltip().positionMode('point');
      chart.yScale().minimum(0);
      chart.container('container-bar');
      chart.draw();
    });
  }, []);

  return <div id="container-bar" style={{ width: '100%', height: '100%' }}></div>;
};

export default BarChart;

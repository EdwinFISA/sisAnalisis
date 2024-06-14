import React, { useEffect } from 'react';
import anychart from 'anychart';
import '../style/graficas.css';

const Column3DChart = () => {
  useEffect(() => {
    anychart.onDocumentReady(function () {
      var chartData = {
        title: 'Top 3 Products with Region Sales Data',
        header: ['#', 'Florida', 'Texas', 'Arizona', 'Nevada'],
        rows: [
          ['Nail polish', 6814, 3054, 4376, 4229],
          ['Eyebrow pencil', 7012, 5067, 8987, 3932],
          ['Lipstick', 8814, 9054, 4376, 9256]
        ]
      };
      var chart = anychart.column3d();
      chart.data(chartData);
      chart.animation(true);
      chart.yAxis().title('Revenue in Dollars');
      chart.yAxis().labels().format('{%Value}{groupsSeparator: }');
      chart.labels().enabled(true).fontColor('#60727b').position('center-top').anchor('center-bottom').format('${%Value}{groupsSeparator: }');
      chart.hovered().labels(false);
      chart.legend().enabled(true).fontSize(13).padding([0, 0, 20, 0]);
      chart.interactivity().hoverMode('single');
      chart.tooltip().positionMode('point').position('center-top').anchor('center-bottom').offsetX(0).offsetY(5).format('{%SeriesName}: ${%Value}{groupsSeparator: }');
      chart.container('container-column');
      chart.draw();
    });
  }, []);

  return <div id="container-column" style={{ width: '100%', height: '100%' }}></div>;
};

export default Column3DChart;

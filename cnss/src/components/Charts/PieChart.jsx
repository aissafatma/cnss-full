import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


/*const pieChartData = [
  { x: 'Indexés', y: 0.1, text: '18%' },
  { x: 'Numérisés', y: 0.25, text: '18%' },
  { x: 'Validés', y: 0.6, text: '18%' },
 /* { x: 'Labour', y: 18, text: '18%' },
  { x: 'Legal', y: 8, text: '8%' },
  { x: 'Production', y: 15, text: '15%' },
  { x: 'License', y: 11, text: '11%' },
  { x: 'Facilities', y: 18, text: '18%' },
  { x: 'Taxes', y: 14, text: '14%' },
  { x: 'Insurance', y: 16, text: '16%' },
];*/
const Doughnut = ({ id, data, legendVisiblity, height }) => {
  
return (
    <AccumulationChartComponent
    id={id}
    legendSettings={{ visible: legendVisiblity, background: 'white' }}
    height={height}
    background='#fff'
    tooltip={{ enable: true }}
  >
    <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
    <AccumulationSeriesCollectionDirective>
      <AccumulationSeriesDirective
        name="Sale"
        dataSource={data}
        xName="x"
        yName="y"
        innerRadius="40%"
        startAngle={0}
        endAngle={360}
        radius="70%"
        explode
        explodeOffset="10%"
        explodeIndex={2}
        dataLabel={{
          visible: true,
          name: 'text',
          position: 'Inside',
          font: {
            fontWeight: '600',
            color: '#fff',
          },
        }}
      />
    </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>
  
);
};

     
              



export default Doughnut ;
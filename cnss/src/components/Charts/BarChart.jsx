import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';
import {  barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const BarChart=() => {
    /*const[Numerised,SetNumerised]=useState([]);
    const[Indexed,SetIndexed]=useState([]);

    const barChartData= () =>{
        axios.get('http://localhost:8800/ds')
        .then(res=>{
            console.log(res);
            
        })
        .catch(err=>{
            console.log(err);
        });};*/
    
    

    //hetha yetnaha baaed 
    const barChartData=[ 
     
        [
          { x: 'USA', y: 48 },
          { x: 'GBR', y: 27 },
          { x: 'CHN', y: 26 },
        ],
        [
          { x: 'USA', y: 37 },
          { x: 'GBR', y: 23 },
          { x: 'CHN', y: 18 },
        ],
        [
          { x: 'USA', y: 38 },
          { x: 'GBR', y: 17 },
          { x: 'CHN', y: 26 },
        ],
      ];
      
      const barCustomSeries = [
        {
          dataSource: barChartData[0],
          xName: 'x',
          yName: 'y',
          type: 'Column',
          marker: {
            dataLabel: {
              visible: true,
              position: 'Top',
              font: { fontWeight: '600', color: '#ffffff' },
            },
          },
        },
        {
          dataSource: barChartData[1],
          xName: 'x',
          yName: 'y',
          type: 'Column',
          marker: {
            dataLabel: {
              visible: true,
              position: 'Top',
              font: { fontWeight: '600', color: '#ffffff' },
            },
          },
        },
        {
          dataSource: barChartData[2],
          xName: 'x',
          yName: 'y',
          type: 'Column',
          marker: {
            dataLabel: {
              visible: true,
              position: 'Top',
              font: { fontWeight: '600', color: '#ffffff' },
            },
          },
        },
      ];//hetha yetnaha baaed
    return (
        <ChartComponent
          id="charts"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background='#fff'
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
          <SeriesCollectionDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
    );
};

export default BarChart;
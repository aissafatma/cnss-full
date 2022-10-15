import React from 'react';
import { Header,  PieChart } from '../../components';
import Indexed from '../../data/indexed';
import PieChartData from '../../data/PieChartData';


var pieChartData = [
  { x:<Indexed/> , y:1, text: '18%'  },
  { x: 'Numérisés', y: 0.25, text: '18%' },
  { x: 'Validés', y: 0.6, text: '18%' }]
const Pie = () => (
  
  <div className="m-4 md:m-10 mt-24 p-10 bg-white  rounded-3xl">
    <Header category="Pie" title="Project Cost Breakdown" />
    <div className="w-full">
    <Indexed/>
    </div>
  </div>
  

);

export default Pie;

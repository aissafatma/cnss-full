import React from 'react';
import { Header } from '../../components';
import {BarChart} from '../../components';
 

const Bar = () => {
  
 

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white  rounded-3xl">
      <Header category="Bar" title="Olympic Medal Counts - RIO" />
      <div className=" w-full">
          <BarChart/>
    
      </div>
    </div>
  );
};


export default Bar;
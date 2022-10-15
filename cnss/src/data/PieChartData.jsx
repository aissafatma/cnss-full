import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const PieChartData = () => {
    const [pies, setpies] = useState([]);

  useEffect(() => {
    const fetchAllpies = async () => {
      try {
        const res = await axios.get("http://localhost:8800/ds");
        setpies(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllpies();
  }, []);

  console.log(pies);
   
  return (1);};
   /* <div>
    {pies.map((pie) => (
    <div>
       
        <h2>{pie.Location}</h2>
        </div>))}
  
        </div>
  );
};*/
        
                    
export default PieChartData
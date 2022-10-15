import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

var Indexed = () => {
    const [pies, setpies] = useState([]);

  useEffect(() => {
    const fetchAllpies = async () => {
      try {
        const res = await axios.get("http://localhost:8800/indexed");
        setpies(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllpies();
  }, []);

  console.log(pies);
  
  
return(
  <div>
  {pies.map((pie) => (
  <div>
     
      {(pie.Indéxés)}
      </div>))}

      </div>)
    
   
};
        
                    
export default Indexed
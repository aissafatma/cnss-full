
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar,Sidebar} from './components';
import{home,Stacked,Pyramid,Area,Bar,Pie,ColorMapping, Financial,Line} from './pages';
import { useStateContext } from './contexts/ContextProvider';
import './App.css';



const App = () => {
  const { activeMenu }= useStateContext();
  return  ( 
    <div>
      <BrowserRouter>
        <div className="flex relative" >
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
             
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar  bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu ? '  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg  w-full min-h-screen flex-2 '
            }
          >
              <div className='fixed md:static bg-main-bg  navbar w-full'>
<Navbar/>
              </div>
          
          <div>
            <Routes>
               {/* charts  */}
               
               <Route path="/" element={<home />} />
               <Route path="/home" element={<home />}/>

               <Route path="/Line" element={<Line />} />
                <Route path="/area" element={< Area/>} />
                <Route path="/pie" element={< Pie/>} />
                <Route path="/bar" element={< Bar/>}  />
                <Route path="/financial" element={<Financial />}  />
                <Route path="/color-mapping" element={< ColorMapping/>}  />
                <Route path="/pyramid" element={< Pyramid/>} />
                <Route path="/stacked" element={< Stacked/>}  />
              </Routes>
          </div>
          </div>
          </div>
          </BrowserRouter>
          </div>
        
          
        
  )
 

}
 
export default App;
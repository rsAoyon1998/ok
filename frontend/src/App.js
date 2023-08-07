// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './s_up';
import About from './log_in';





import Upload_2 from './car_upload';

import Car_update from './car_update';











import User_list from './user_list';

import User_list_2 from './user_list_2';

import User_list_3 from './user_list_3';



import Search from './search';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />

		  <Route path="/log_in" element={<About />} />
        
       

        

        <Route path="/car_upload/" element={<Upload_2 />} />

        <Route path="/car_update/:id" element={<Car_update />} />

        

       



        <Route path="/user_list" element={<User_list />} />
        
        <Route path="/user_list_2/:id" element={<User_list_2 />} />
        <Route path="/user_list_3/:id" element={<User_list_3 />} />


        <Route path="/search" element={<Search />} />

      
        
       

        
       </Routes>
    </>
 );
};

export default App;
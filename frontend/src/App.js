// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './s_up';
import About from './log_in';

import Main from './hompage';



import Upload_2 from './car_upload';

import Xyz from './reservation_first_page';


import Abc from './reservation_second_page';

import Random from './reserved_trip';




import Another from './another';

import Data from './car_data';


import Ad_admin from './ad_admin';

import Ad_pol from './ad_pol';


import App_2 from './google_auth';

import Profile_update from './profile_update';

import Admin_log_in from './admin_log_in';

import User_list from './user_list';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />

		  <Route path="/log_in" element={<About />} />
        
        <Route path="/hompage/:id" element={<Main />} />

        

        <Route path="/car_upload" element={<Upload_2 />} />

        <Route path="/reservation_first_page/:id" element={<Xyz />} />

        <Route path="/another" element={<Another />} />

        <Route path="/reservation_second_page/:id" element={<Abc />} />

        {/* <Route path="/random/:id" element={<Random />} /> */}


        <Route path="/reserved_trip" element={<Random />} />
        
        <Route path="/car_data" element={<Data />} />

        

        <Route path="/ad_admin" element={<Ad_admin />} />

        
        <Route path="/ad_pol" element={<Ad_pol />} />

        <Route path="/google_auth" element={<App_2 />} />

        <Route path="/admin_log_in" element={<Admin_log_in />} />

        <Route path="/profile_update/:id" element={<Profile_update />} />

        <Route path="/user_list" element={<User_list />} />
        

       </Routes>
    </>
 );
};

export default App;
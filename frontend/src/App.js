// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './s_up';
import About from './log_in';

import Main from './hompage';

import Upload from './upload';

import Upload_2 from './upload_2';

import Xyz from './xyz';


import Abc from './abc';

import Random from './random';

import Another from './another';

import Data from './data';


import Ad_admin from './ad_admin';

import Ad_pol from './ad_pol';


import App_2 from './App_2';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />

		  <Route path="/log_in" element={<About />} />
        
        <Route path="/hompage" element={<Main />} />

        <Route path="/upload" element={<Upload />} />

        <Route path="/upload_2" element={<Upload_2 />} />

        <Route path="/xyz" element={<Xyz />} />

        <Route path="/another" element={<Another />} />

        <Route path="/abc/:id" element={<Abc />} />

        <Route path="/random/:id" element={<Random />} />
        
        <Route path="/data" element={<Data />} />

        <Route path="/ad_admin" element={<Ad_admin />} />

        
        <Route path="/ad_pol" element={<Ad_pol />} />

        <Route path="/App_2" element={<App_2 />} />

       </Routes>
    </>
 );
};

export default App;
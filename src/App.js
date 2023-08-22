import React, { Fragment } from 'react';
import './index.css'
import {
	
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

import Browse from './pages/browse/Browse'
import Search from './pages/search/Search';


function App() {
	return (<div className='content'>
	<Fragment>
	      
		<Routes>
		  <Route path="/" element={<Navigate to={'/home'}/> }/>
		  <Route path="/home" element={<Browse/>}/>
		  <Route path="/search" element={<Search/>}/> 
		</Routes>
	  </Fragment>
	
	</div>)

}

export default App;

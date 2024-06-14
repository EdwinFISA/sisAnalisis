import React, { Fragment } from "react";

import Navbar from './asset/components/Navbar';
import Menu from './asset/components/Menu';
import Routes from './Routes';


 function App() {
    return (
      <Fragment>     
        
        <Navbar />
           <div class="container-fluid">
            <div class="row">
              <Menu />

            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Routes/>
            </main>
            
            </div>
           </div>
      </Fragment>

    );
  }
  export default App;
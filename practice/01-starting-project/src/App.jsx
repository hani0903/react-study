import componentsImg from './assets/Components.png';

// 컴포넌트 분리
import Header from'./components/Header/Header.jsx';
import CoreConcepts from'./components/CoreConcepts.jsx';

import { useState, Fragment } from 'react';
import Examples from './components/Examples.jsx';

function App() {

  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts/>    
        <Examples/>    
        <h2>Time to get started!</h2>
      </main>
    </Fragment>
  );
}

export default App;
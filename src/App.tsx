import React from 'react';
import Menu from './components/Menu';

import GlobalStyles from './globalStyles';
import Index from './pages/Index';

const App: React.FC = () => {
  return(
    <>
      <GlobalStyles/>
      <Index/>
    </>
  )
}

export default App;
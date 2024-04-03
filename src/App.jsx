// App.js
import React from 'react';
import { LanguageProvider } from './LanguageContext';
import LanguageSelector from './LanguageSelector';
import Greeting from './Greeting';


const App = () => {
  return (
    <LanguageProvider>
      <div>
        <h1>Language Selector APP</h1>
        <LanguageSelector/>
        <Greeting/>

      </div>
    </LanguageProvider>
  );
};

export default App;

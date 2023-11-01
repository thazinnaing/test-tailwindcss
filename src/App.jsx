import React from 'react';
import ChitChat from './components/ChitChat';
import HoverButton from './components/HoverButton';
import DivideStyle from './components/DivideStyle';

const App = () => {
  return (
    <div class="space-y-10 max-w-sm mx-auto">
    <ChitChat/>
    <HoverButton/>
    <DivideStyle/>
    </div>
    
  );
}

export default App;

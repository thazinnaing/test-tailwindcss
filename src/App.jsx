import React from 'react';
import ChitChat from './components/ChitChat';
import HoverButton from './components/HoverButton';
import DivideStyle from './components/DivideStyle';
import FlexBasis from './components/FlexBasis';

const App = () => {
  return (
    <div class="space-y-10 max-w-sm mx-auto">
    <ChitChat/>
    <HoverButton/>
    <DivideStyle/>
    <FlexBasis/>
    </div>
    
  );
}

export default App;

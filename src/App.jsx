import React from 'react';
import ChitChat from './components/ChitChat';
import HoverButton from './components/HoverButton';
import DivideStyle from './components/DivideStyle';
import FlexBasis from './components/FlexBasis';
import Order from './components/Order';
import Grid from './components/Grid';

const App = () => {
  return (
    <div class="space-y-10 max-w-sm mx-auto">
    <ChitChat/>
    <HoverButton/>
    <DivideStyle/>
    <FlexBasis/>
    <Order/>
    <Grid/>
    </div>
    
  );
}

export default App;

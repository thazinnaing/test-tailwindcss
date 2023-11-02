import React from 'react';
import ChitChat from './components/ChitChat';
import HoverButton from './components/HoverButton';
import DivideStyle from './components/DivideStyle';
import FlexBasis from './components/FlexBasis';
import Order from './components/Order';
import Grid from './components/Grid';
import ColumnSpan from './components/ColumnSpan';
import RowSpan from './components/RowSpan';

const App = () => {
  return (
    <div class="space-y-10 max-w-sm mx-auto">
    <ChitChat/>
    <HoverButton/>
    <DivideStyle/>
    <FlexBasis/>
    <Order/>
    <Grid/>
    <ColumnSpan/>
    <RowSpan/>
    </div>
    
  );
}

export default App;

import React from 'react';

const FlexBasis = () => {
  return (
  
    <div class="flex flex-row space-x-6 ">
        <div class="basis-1/3 hover:basis-1/2 bg-violet-400">01</div>
        <div class="basis-1/2 bg-violet-400">02</div>
        <div class="basis-1/5 bg-violet-400">03</div>
    </div>

  );
}

export default FlexBasis;

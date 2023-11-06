import React from 'react';

const GridJustifyItems = () => {
  return (
    <div class="grid grid-cols-3 gap-x-5 gap-y-7 justify-items-start sm:justify-items-end md:justify-items-center lg:justify-items-stretch">
        <div class="bg-green-400">01</div>
        <div class="bg-green-400">02</div>
        <div class="bg-green-400">03</div>
        <div class="bg-green-400">04</div>
        <div class="bg-green-400">05</div>
        <div class="bg-green-400">06</div>
    </div>
  );
}

export default GridJustifyItems;

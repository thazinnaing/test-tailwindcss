import React from 'react';

const RowSpan = () => {
  return (
    <div class="grid grid-rows-4 grid-flow-col gap-4">
        <div class="bg-yellow-500 row-span-3">111</div>
        <div class="bg-yellow-500 col-span-2">222</div>
        <div class="bg-yellow-500 row-start-3 row-span-2 col-span-2">333</div>
    </div>
  );
}

export default RowSpan;

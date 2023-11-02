import React from 'react';

const ColumnSpan = () => {
  return (
    <div class="grid grid-cols-5 gap-4">
        <div class="bg-green-300 h-9 col-start-3 col-span-2"> 11</div>
        <div class="h-9 bg-green-300 col-start-2 col-end-6"> 22</div>
        <div class="h-9 bg-green-300"> 33</div>
        <div class="h-9 bg-green-300 col-span-2"> 44</div>
        <div class="h-9 bg-green-300 md:col-span-3"> 55</div>
        <div class="h-9 bg-green-300"> 66</div>
    </div>
  );
}

export default ColumnSpan;

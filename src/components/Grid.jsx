import React from 'react';

const Grid = () => {
  return (
    <div class="grid grid-cols-1 gap-4 hover:grid-cols-5">
        <div class="bg-slate-300 w-11 h-9"> 11</div>
        <div class="w-7 h-3"> 22</div>
        <div class="w-7 h-3"> 33</div>
        <div class="w-7 h-3"> 44</div>
        <div class="w-7 h-3"> 55</div>
    </div>
  );
}

export default Grid;

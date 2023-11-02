import React from 'react';

const Grid = () => {
  return (
    <div class="grid grid-cols-1 gap-4 hover:grid-cols-5">
        <div class="bg-slate-300 h-9"> 11</div>
        <div class="h-9 bg-slate-300"> 22</div>
        <div class="h-9 bg-slate-300"> 33</div>
        <div class="h-9 bg-slate-300"> 44</div>
        <div class="h-9 bg-slate-300"> 55</div>
    </div>
  );
}

export default Grid;

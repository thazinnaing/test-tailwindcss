import React from 'react';

const HoverButton = () => {
  return (
    <div class="flex space-x-4">
        <button class="bg-sky-400 rounded-full px-3 py-3 text-white hover:bg-sky-600 ">
            Save Hover Chages
        </button>
        <button class="bg-violet-500 rounded-full px-3 py-3 hover:bg-violet-600 focus:outline-none active:bg-violet-700 focus:ring focus:ring-violet-300">
            Save Ring Changes
        </button>

      
    </div>
  );
}

export default HoverButton;

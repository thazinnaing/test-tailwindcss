import React from 'react';

const Order = () => {
  return (
    <div class="flex space-x-3">
        <div class="hover:order-last">O1</div>
        <div>O2</div>
        <div class="md:order-last">O3</div>
        <div>O4</div>
        <div>O5</div>
      
    </div>
  );
}

export default Order;

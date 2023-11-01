import React from 'react';
import Chitchat from "../assets/chitchat.svg"

const ChitChat = () => {
  return (
    <div class="p-8 bg-green-100 flex items-center space-x-5 rounded-xl shadow-lg my-4 ">
      <div class="shrink-0">
        <img class="w-10 h-11" src={Chitchat} alt="Chit Chat Logo"/>
      </div>
      <div>
        <div class="text-xl font-medium text-black" >
          ChitChat
        </div>
        <p class="text-slate-500">
          You have a new message!
        </p>
      </div>
    </div>
  );
}

export default ChitChat;


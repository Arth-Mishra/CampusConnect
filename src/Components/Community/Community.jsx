import React from "react";
import Sidebar from "../Navigation/Sildebar";
import LeftMessages from "./LeftMessages";
import RightMessages from "./RightMessages";

const Community = () => {
  return (
    <>
      <Sidebar />
      <div className=" mt-[72px] pl-64">
        <h2 className="text-center border border-black text-2xl ">Connect...</h2>
        <div className="pt-20 pl-20">
          <LeftMessages items="Hello"/>
          <RightMessages items="Hii"/>
          
          <LeftMessages items="What's up"/>
          <RightMessages items="Nothing"/>
          
          <LeftMessages items="Wanna meet"/>
          <RightMessages items="Sure"/>

          <LeftMessages items="dont worry"/>
          <RightMessages items="Sure"/>

          <LeftMessages items="let's go"/>
          <RightMessages items="Sure"/>
          
        </div>
      </div>
    </>
  );
};

export default Community;

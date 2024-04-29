import React, { useRef } from "react";
import Card from "./card";


function Foreground() {

  const ref = useRef(null)

  const data = [
    {
      desc: "200 movies are stored.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen:true, tagtitle:"Download Now", tagcolor:"green" },
    },
    {
      desc: "department important doc",
      filesize: ".9mb",
      close: true,
      tag: { isOpen:true, tagtitle:"Download Now", tagcolor:"blue" },
    },
    {
      desc: "college imporatant doc and flies.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen:false, tagtitle:"Upload", tagcolor:"green" },
    },
  ];
  return (
    <div ref ={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-8 flex-wrap p-5">
      {data.map((item,index)=>(
        <Card data ={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;

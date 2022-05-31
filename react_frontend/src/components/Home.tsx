import React from "react";

export default function Home(props:{data:any}){
  console.log(props.data.title);
  return (
    <div>
      <h1>{props.data.title}</h1>
    </div>
  );
}

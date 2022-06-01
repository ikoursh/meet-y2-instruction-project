import React from "react";
// import * as carbon from "@carbon/react"
import "./Home.scss";
import { Button } from 'carbon-components-react';
// @ts-ignore
import {ArrowRight, Login} from '@carbon/icons-react';

export default function Home(props:{data:any}){
  console.log(props.data.title);
  return (
    <div>
        <img className={"bg"} src={"/images/bg-main.jpg"}></img>

        <div className={"side-panel"}>
            <h1 className={"title"}>{props.data.title}</h1>
            <h6 className={"description"}>{props.data.description}</h6>
            <p className={"text"}>{props.data.text}</p>
            <Button renderIcon={Login} size={"lg"} onClick={()=>{
                window.location.href= "/login";
            }} className={"button"}>Login </Button>
            <Button className={"button"} renderIcon={ArrowRight} kind={"secondary"} size={"lg"} onClick={()=>{
                window.location.href= "/register";
            }} >Register </Button>
            <a className={"attr"} href="https://www.freepik.com/vectors/grainy-background">Grainy background vector created by freepik - www.freepik.com</a>

        </div>

    </div>

  );
}

import React from "react";
// import * as carbon from "@carbon/react"
import "./Home.scss";
import { Button  } from 'carbon-components-react';
// @ts-ignore
import { Login } from '@carbon/icons-react';

export default function Home(props:{data:any}){
  console.log(props.data.title);
  return (
    <div>
      <h1>{props.data.title}</h1>
        <Button renderIcon={Login}>Login </Button>
      <Button renderIcon={Login} kind={"secondary"}>Signup </Button>
    </div>
  );
}

import React from "react";
// import * as carbon from "@carbon/react"
import "./Login.scss";
import {Button, Form, TextInput, Grid, Checkbox, Link} from 'carbon-components-react';
//@ts-ignore
import {ArrowRight} from '@carbon/icons-react';

export default function Login(props: { data: any }) {
    console.log(props.data.title);
    return (
        <div style={{position: "relative"}}>

            <img className={"bg"} src={"/images/bg-auth.jpg"}>
            </img>
            <div className={"center"}>

                <Form >

                    <h2 className={"login"}>Login</h2>
                    <div className={"help"}>Don't have and account?  <Link href={"/register"}>Create one here</Link></div>
                    <div className={"divider"}/>
                    <TextInput
                        id="email"
                        invalidText="Invalid email."
                        labelText="Email Address"
                        placeholder="example@gmail.com"
                        className={'text-input'}
                    />
                    <Checkbox id={"rememberId"} labelText={"Remember me"} className={"checkbox"}/>


                    <Button
                        kind="primary"
                        tabIndex={0}
                        type="submit"
                        renderIcon={ArrowRight}
                        className={"button"}
                    >
                        Continue
                    </Button>
                </Form>


            </div>

        </div>
    );
}

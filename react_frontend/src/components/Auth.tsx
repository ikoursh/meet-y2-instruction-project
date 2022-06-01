import React from "react";
// import * as carbon from "@carbon/react"
import "./Login.scss";
import {Button, Form, TextInput, Grid, Checkbox, Link, PasswordInput} from 'carbon-components-react';
//@ts-ignore
import {ArrowRight} from '@carbon/icons-react';

function isValidEmail(email:string){
    return email.length>0&&email.includes("@");
}

export default function Auth(props: { AuthType:string }) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [stage, setStage] = React.useState(0);
    const isValid = !(stage==0?!isValidEmail(email):password.length<6);
    const isLogin = props.AuthType=="login";
    return (
        <div style={{position: "relative"}}>

            <img className={"bg"} src={"/images/bg-auth.jpg"}>
            </img>
            <div className={"center"}>

                <Form onSubmit={(e)=>{
                    e.preventDefault();
                    if (isValidEmail(email)) {
                        setStage(1);
                    }
                }}>

                    <h2 className={"login"}>{isLogin?"Login":"Register"}</h2>
                    <div className={"help"}>
                        {stage==0? <span>{isLogin?"Don't":"Already"} have and account?
                                {isLogin?<Link href={"/register"}>Create one here</Link>:<Link href={"/login"}>Login here</Link>}</span>
                            : <span>{isLogin?"Logging in":"Signing up"} as {email} <Link onClick={()=>setStage(0)}>Not you?</Link> </span>}
                    </div>
                    <div className={"divider"}/>
                    {stage==0?<><
                        TextInput
                        id="email"
                        invalidText="Invalid email."
                        labelText="Email Address"
                        placeholder="example@gmail.com"
                        className={'text-input'}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}

                        value={email}
                        invalid={!isValid && email.length>0}
                    />
                        <Checkbox id={"rememberId"} labelText={"Remember me"} className={"checkbox"}/></>:
                        <PasswordInput
                            id="password"
                            invalidText="Invalid password. Must have more then 6 characters."
                            labelText="Password"
                            placeholder="********"
                            className={'text-input'}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            value={password}
                            type={'password'}
                            invalid={!isValid && password.length>0}
                        />
                    }

                    <Button
                        kind="primary"
                        tabIndex={0}
                        type="submit"
                        renderIcon={ArrowRight}
                        className={"button"}
                        disabled={!isValid}
                    >
                        Continue
                    </Button>
                </Form>


            </div>

        </div>
    );
}

import React, {lazy, useEffect, Suspense} from 'react';
import './App.scss';
import {getAuth} from "firebase/auth"
import firebase from "./firebase";
import {Header, HeaderName} from "carbon-components-react";
//@ts-ignore
import {Loading} from "@carbon/react";


const url = "http://127.0.0.1:5000"

function pathFromHref(href: string) {
    href = href.replace("://", "");
    const [, ...rest] = href.split('/');
    return rest.join("/");
}

const auth = getAuth(firebase);

function App() {
    const path = pathFromHref(window.location.href);
    const [data, setData] = React.useState<any>(null);
    const [user, setUser] = React.useState<any>(getAuth(firebase).currentUser);
    auth.onAuthStateChanged((userL) => {
        if (JSON.stringify(userL) != JSON.stringify(user)) {
            setUser(userL);
        }
    });
    useEffect(() => {
        const fetchData = async () => {

            try {
                console.log(auth.currentUser)

                fetch(url + "/" + path, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: user != null ? JSON.stringify({
                        token: await user.getIdToken()
                    }) : "{}"
                }).then(res => res ? res.json() : res)
                    .then(json => setData(json));
            } catch (e) {
            }
        }
        fetchData();
    }, []);

    const Component = getComponent(path);

    return (
        <div className="App">



            <div style={{top:"48px", position:"relative"}}>
            <Suspense fallback={<Loading/>}>
                {data ? <Component data={data}/> : <Loading/>}
            </Suspense>
            </div>

            <Header >
                <HeaderName href="/" prefix="API Playground">
                    WEB
                </HeaderName>
            </Header>

        </div>
    );
}

function getComponent(path: string) {
    //unfortunately, we cannot dynamically import components at runtime so we need to use a switch
    switch (path) {
        case "":
            return lazy(() => import("./components/Home"));
        case "login":
            return lazy(() => import("./components/Login"));
        case "register":
            return lazy(() => import("./components/Register"));
        case "dashboard":
            return lazy(() => import("./components/Dashboard"));
    }
    return lazy(() => import("./components/NotFound404"));
}

export default App;

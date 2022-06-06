import React, {lazy, useEffect, Suspense, useState} from 'react';
import './App.scss';
import firebase, {auth, db} from "./firebase";
import {Header, HeaderName} from "carbon-components-react";
//@ts-ignore
import {Loading} from "@carbon/react";
import {useAuthState} from "react-firebase-hooks/auth";
import {get, ref} from "firebase/database"

const url = "https://ekzt0z.deta.dev/"

function pathFromHref(href: string) {
    href = href.replace("://", "");
    const [, ...rest] = href.split('/');
    return rest.join("/").split("?");
}


function App() {
    const [path, query] = pathFromHref(window.location.href);
    const [data, setData] = React.useState<any>(null);
    const [user, loading, error] = useAuthState(auth);

    if (user && (path == "login" || path == "register")) {
        get(ref(db, user.uid)).then(snapshot => {
            if (snapshot.val() && snapshot.val().selected) {
                window.location.href = "/dashboard";
            }
        });
    }

    useEffect(() => {
        const fetchData = async () => {

            try {

                fetch(url + "/" + path, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        ...(user) && {"token": await user.getIdToken()},
                        ...(query) && {"query": query}
                    })
                }).then(res => res ? res.json() : res)
                    .then(json => setData(json));
            } catch (e) {
            }
        }
        if (!loading)
            fetchData();
    }, [user, loading]);

    const Component = getComponent(path);

    return (
        <div className="App">



            <div style={{top:"48px", position:"relative"}}>
            <Suspense fallback={<Loading/>}>
                {data ? <Component data={data} user={user}/> : <Loading/>}
            </Suspense>
            </div>

            <Header>
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

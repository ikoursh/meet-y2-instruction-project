import React, {lazy, useEffect, Suspense} from 'react';
import './App.css';
// import C from './components/Home';
const url = "http://127.0.0.1:5000"

function pathFromHref(href: string) {
    href = href.replace("://", "");
    const [, ...rest] = href.split('/');
    return rest.join("/");
}

function App() {
    const path = pathFromHref(window.location.href);
    const [data, setData] = React.useState<any>(null);
    useEffect(() => {
        try {
            fetch(url + "/" + path)
                .then(res => res?res.json():res)
                .then(json => setData(json))
        } catch (e){}
    }, [path]);

    const Component = getComponent(path);

    return (
        <div className="App">
            <h2>Path</h2>
            <p>{path===""?"/":path}</p>
            <h2> Data</h2>
            <p>{JSON.stringify(data, null, 4)}</p>
            <br/>
            <Suspense>
                {data?<Component data={data}/>:<div>Loading...</div>}
            </Suspense>

        </div>
    );
}

function getComponent(path: string) {
    //unfortunately, we cannot dynamically import components at runtime so we need to use a switch
    switch (path) {
        case "":
            return lazy(() => import("./components/Home"));
    }
    return lazy(() => import("./components/NotFound404"));
}

export default App;

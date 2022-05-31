import React, {useEffect} from 'react';
import './App.css';

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
        fetch(url + "/" + path)
            .then(res => res.json())
            .then(json => setData(json))
    }, [path]);

    return (
        <div className="App">
            {path}
            {JSON.stringify(data)}
        </div>
    );
}

export default App;

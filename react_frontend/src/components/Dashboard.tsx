import {
    Button,
    SelectItem,
    Form,
    TextInput,
    TextArea,
    Select,
    SideNav,
    SideNavItems,
    SideNavItem, SideNavMenu, SideNavMenuItem, Breadcrumb, BreadcrumbItem
} from 'carbon-components-react';
import React, {ReactNode, useEffect} from 'react';

//@ts-ignore
import {ArrowUpRight} from "@carbon/icons-react";
import "./Dashboard.scss"
import {db} from "../firebase";
import { ref, set, get } from 'firebase/database';
export default function Dashboard(props:any){
    const [name, setName] = React.useState("Astronomic Picture of the Day");
    // @ts-ignore
    const data:formData[] = dataMap[name];

    useEffect(()=>{
        get(ref(db, props.user.uid)).then(snapshot => {
            setName(snapshot.val().selected);
        });
    }, []);

    return(
        <div>
            <div className={"bg"}>

                <Breadcrumb className={"breadcrumb"}>
                    <BreadcrumbItem href="/dashboard">APIs</BreadcrumbItem>
                    <BreadcrumbItem >NASA</BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage={true}>{name}</BreadcrumbItem>
                </Breadcrumb>

            <h1>Dashboard</h1>
                <Form className={"form"} action={"/dashboard"} method={"get"}>
                    <h2>{name}</h2>
                    {
                        data.map((form)=>{
                            return <TextInput key={form.value} id={form.name} labelText={form.name} name={form.name.toLowerCase()} defaultValue={form.value}/>
                        })
                    }

                    <Button
                        kind="primary"
                        tabIndex={0}
                        type="submit"
                        size={"md"}
                        className={"get-button"}
                        renderIcon={ArrowUpRight}
                    >
                        GET
                    </Button>
                </Form>

                <div className={"form"} style={{marginTop: 24}}>
                    <h2>Response</h2>
                   <pre style={{whiteSpace:"pre-wrap" }}> {linkRenderer(JSON.stringify(props.data, null, 4))}</pre>
                </div>

            </div>

            <SideNav
                className="side-nav"
                expanded={true}
                isChildOfHeader={false}
                isFixedNav={true}
                isPersistent={true}
                title="SideNav">

                <SideNavItems>
                    <SideNavMenu title={"Nasa APIs"} defaultExpanded={true}>
                        <SideNavMenuItem onClick={()=>{
                            setName("Astronomic Picture of the Day");
                            set(ref(db, props.user.uid), {
                                selected: "Astronomic Picture of the Day"
                            });
                        }} isActive={name==="Astronomic Picture of the Day"}>Astronomic Picture Of The Day</SideNavMenuItem>
                        <SideNavMenuItem onClick={() => {
                            setName("Mars Rover Photos");
                            set(ref(db, props.user.uid), {
                                selected: "Mars Rover Photos"
                            })
                        }} isActive={name==="Mars Rover Photos"}>Mars Rover Photos</SideNavMenuItem>
                        <SideNavMenuItem onClick={()=>{
                            setName("Mars Weather")
                            set(ref(db, props.user.uid), {
                                selected: "Mars Weather"
                            })
                        }} isActive={name==="Mars Weather"}>Mars Whether Service</SideNavMenuItem>


                    </SideNavMenu>
                </SideNavItems>
            </SideNav>



        </div>
    )
}

export interface formData{
    name: string,
    value: string
}

const dataMap = {
    "Mars Weather": [
        {
            name: "URL",
            value: "https://api.nasa.gov/insight_weather/"
        },
        {
            name: "FeedType",
            value: "json"
        }
    ],
    "Mars Rover Photos": [{
        name: "URL",
        value: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos"
    }, {
        name: "Sol",
        value: "1000"
    }],
    "Astronomic Picture of the Day": [{
        name: "URL",
        value: "https://api.nasa.gov/planetary/apod"
    }]

}

export const linkRenderer = (string: string):ReactNode => {
    const linkExp = /^https?:\/\/[a-z0-9_./-]*$/i
    return <>{
        string.split(/(https?:\/\/[a-z0-9_./-]*)/gi).map((part, k) => <React.Fragment key={k}>
            {part.match(linkExp) ? <a
                    href={part}
                    onFocus={(e) => { e.stopPropagation() }}
                    target="_blank"
                    rel="noreferrer"
                >{part}</a>
                : part}
        </React.Fragment>)
    }</>
}

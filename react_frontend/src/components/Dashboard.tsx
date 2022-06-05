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
import React from 'react';

//@ts-ignore
import {ArrowUpRight} from "@carbon/icons-react";
import "./Dashboard.scss"

export default function Dashboard(props:any){
    const [name, setName] = React.useState("Astronomic Picture of the Day");
    const [data, setData] = React.useState<formData[]>([{
        name: "URL",
        value: "https://api.nasa.gov/planetary/apod"
    }]);
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
                   <pre style={{whiteSpace:"pre-wrap" }}> {JSON.stringify(props.data, null, 4)}</pre>
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
                            setData([{
                                name: "URL",
                                value: "https://api.nasa.gov/planetary/apod"
                            }])
                        }} isActive={name==="Astronomic Picture of the Day"}>Astronomic Picture Of The Day</SideNavMenuItem>
                        <SideNavMenuItem onClick={() => {
                            setName("Mars Rover Photos");
                            setData([{
                                name: "URL",
                                value: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos"
                            }, {
                                name: "Sol",
                                value: "1000"
                            }])
                        }} isActive={name==="Mars Rover Photos"}>Mars Rover Photos</SideNavMenuItem>
                        <SideNavMenuItem onClick={()=>{
                            setName("Mars Weather")
                            setData([
                                {
                                    name: "URL",
                                    value: "https://api.nasa.gov/insight_weather/"
                                },
                                {
                                    name: "FeedType",
                                    value: "json"
                                }
                            ])
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

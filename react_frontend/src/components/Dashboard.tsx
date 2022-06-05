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
    return(
        <div>
            <div className={"bg"}>

                <Breadcrumb className={"breadcrumb"}>
                    <BreadcrumbItem href="/dashboard">APIs</BreadcrumbItem>
                    <BreadcrumbItem >NASA</BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage={true} href="/" >Astronomic Picture of The Day</BreadcrumbItem>
                </Breadcrumb>

            <h1>Dashboard</h1>
                <Form className={"form"} action={"/dashboard"} method={"get"}>
                    <h2>Astronomic Picture of The Day</h2>
                    <TextInput
                        helperText="API url endpoint"
                        id="url"
                        name={"url"}
                        labelText="URL"
                        contentEditable={false}
                        // disabled={true}
                        value={"https://api.nasa.gov/planetary/apod"}
                    />

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
                    <SideNavMenu title={"Nasa APIs"}>
                        <SideNavMenuItem>Astronomic Picture Of The Day</SideNavMenuItem>
                        <SideNavMenuItem>Mars Rover Photos</SideNavMenuItem>
                        <SideNavMenuItem>Mars Whether Service</SideNavMenuItem>


                    </SideNavMenu>
                </SideNavItems>
            </SideNav>



        </div>
    )
}

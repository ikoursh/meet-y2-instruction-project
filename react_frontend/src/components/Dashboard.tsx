import {
    Button,
    SelectItem,
    Form,
    TextInput,
    TextArea,
    Select,
    SideNav,
    SideNavItems,
    SideNavItem, SideNavMenu, SideNavMenuItem
} from 'carbon-components-react';
import React from 'react';

//@ts-ignore
import {ArrowUpRight} from "@carbon/icons-react";
import "./Dashboard.scss"

export default function Dashboard(props:any){
    return(
        <div>
            <div className={"bg"}>

            <h1>Dashboard</h1>
                <Form className={"form"}>
                    <h2>Astronomic Picture of The Day</h2>
                    <TextInput
                        helperText="API url endpoint"
                        id="url"
                        labelText="URL"
                        contentEditable={false}
                        // disabled={true}
                        value={"https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"}
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

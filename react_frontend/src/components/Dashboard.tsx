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
import "./Dashboard.scss"

export default function Dashboard(props:any){
    return(
        <div>
            <div className={"bg"}>

            <h1>Dashboard</h1>
                <Form>
                    <TextInput
                        helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
                        id="test2"
                        invalidText="Invalid error message."
                        labelText="Text input label"
                        placeholder="Placeholder text"
                    />
                    <TextArea
                        cols={50}
                        helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
                        id="test5"
                        invalidText="Invalid error message."
                        labelText="Text area label"
                        placeholder="Placeholder text"
                        rows={4}
                    />
                    <Select
                        defaultValue="placeholder-item"
                        id="select-1"
                        invalidText="This is an invalid error message."
                        labelText="Select"
                    >
                        <SelectItem
                            text="Option 1"
                            value="option-1"
                        />
                        <SelectItem
                            text="Option 2"
                            value="option-2"
                        />
                        <SelectItem
                            text="Option 3"
                            value="option-3"
                        />
                    </Select>
                    <Button
                        kind="primary"
                        tabIndex={0}
                        type="submit"
                    >
                        Submit
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

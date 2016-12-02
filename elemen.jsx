import React from 'react';
import ReactDOM from 'react-dom';

//import for navigation element
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

//import for button
import { ButtonToolbar, Button } from 'react-bootstrap';

const BootstrapNav = (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
        </Nav>
    </Navbar>
);

const BootstrapBtn = (
    <ButtonToolbar>
        {/* Standard button */}
        <Button>Default</Button>

        {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
        <Button bsStyle="primary">Primary</Button>

        {/* Indicates a successful or positive action */}
        <Button bsStyle="success">Success</Button>

        {/* Contextual button for informational alert messages */}
        <Button bsStyle="info">Info</Button>

        {/* Indicates caution should be taken with this action */}
        <Button bsStyle="warning">Warning</Button>

        {/* Indicates a dangerous or potentially negative action */}
        <Button bsStyle="danger">Danger</Button>
        
        {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
        <Button bsStyle="link">Link</Button>
    </ButtonToolbar>
);

ReactDOM.render(BootstrapNav, document.getElementById('nav'));
ReactDOM.render(BootstrapBtn, document.getElementById('button'));
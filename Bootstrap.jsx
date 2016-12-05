import React from 'react';
import ReactDOM from 'react-dom';
//import for navbar
import {Navbar,Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
//import for grid layout
import {Grid, Row, Col} from 'react-bootstrap';
//import for button
import {ButtonToolbar, Button} from 'react-bootstrap';

//navbar on react bootstrap

const NavbarInverse = (
    <Navbar inverse collapseOnSelect>
    <Navbar.Header>
        <Navbar.Brand>
            <a href="#">React-Bootstrap</a>
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
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
        <Nav pullRight>
            <NavItem eventKey={1} href="#">Link Right</NavItem>
            <NavItem eventKey={2} href="#">Link Right</NavItem>
        </Nav>
    </Navbar.Collapse>
</Navbar>
);

//grid on react bootstrap

const st = ['more sentences here guys!'];
const kalimat1 = ['first sentences in column 0.1'];
const kalimat2 = ['second sentences in column 0.2'];

const tampilanGrid = (
    <Grid bsClass="container-fluid">
        <Row>
            <Col sm={6}>{st}</Col>
            <Col sm={6}>
                <Col sm={6}>{kalimat1}</Col>
                <Col sm={6}>{kalimat2}</Col>
            </Col>
        </Row>
    </Grid>
);

const tombol = (
    <ButtonToolbar>
        {/*Button Default*/}
        <Button>Default</Button>
        {/*Button Primary*/}
        <Button bsStyle="primary">Primary</Button>
    </ButtonToolbar>
);
//rendering component navbar
ReactDOM.render(NavbarInverse, document.getElementById('navbar-inverse'));
//rendering component grid
ReactDOM.render(tampilanGrid, document.getElementById('tampilan-grid'));
//rendering component button
ReactDOM.render(tombol, document.getElementById('tombol'));
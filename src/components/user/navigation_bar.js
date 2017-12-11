import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import Icon from 'react-icons-kit';
import { car } from 'react-icons-kit/fa/car';

export default class NavigatioBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <div className="container">
            <NavbarBrand href="/">
            <Icon className="car-icon" icon={car}/>
             G66 CARS</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/cars">NEW CARS</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">FINANCE</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">SERVICE</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">PARTS</NavLink>
                </NavItem>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav caret>
                    ABOUT
                  </DropdownToggle>
                  <DropdownMenu >
                    <DropdownItem>
                      ABOUT US
                    </DropdownItem>
                    <DropdownItem>
                      STAFF
                    </DropdownItem>
                    <DropdownItem>
                      CONTACT US
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

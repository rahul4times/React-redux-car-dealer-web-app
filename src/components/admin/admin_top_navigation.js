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

export default class AdminNavigatioBar extends React.Component {
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
            <NavbarBrand href="/admin/">
            <Icon className="car-icon" icon={car}/>
             G66 CARS ADMIN</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/admin/">HOME</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/admin/newcar">ADD NEW CAR</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/admin/messages">MESSAGES</NavLink>
                </NavItem>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav caret>
                    ADMIN
                  </DropdownToggle>
                  <DropdownMenu >
                    <DropdownItem>
                      PROFILE
                    </DropdownItem>
                    <DropdownItem>
                      LOGOUT
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

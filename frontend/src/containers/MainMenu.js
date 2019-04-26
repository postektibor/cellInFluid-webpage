import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBIcon } from 'mdbreact';
import { Link } from 'react-router-dom';

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <header>
        <MDBNavbar className={'primary-color'} dark expand="md" scrolling fixed="top">
          <MDBNavbarBrand>
            <div>
              <strong>Cell in fluid</strong></div>
            <div>
              Biomedical research group
            </div>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.onClick}/>
          <MDBCollapse isOpen={this.state.collapse} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <Link className={'nav-link waves-effect waves-light'} to="#">Home</Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link className={'nav-link waves-effect waves-light'} to="#">Research</Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link className={'nav-link waves-effect waves-light'} to="#">Resources/Espresso</Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link className={'nav-link waves-effect waves-light'} to="#">Actual</Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link className={'nav-link waves-effect waves-light'} to="#">Publications</Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link className={'nav-link waves-effect waves-light'} to="#">Team</Link>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <Link className={'nav-link waves-effect waves-light'} to="#"><MDBIcon icon="search"/></Link>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </header>
    );
  }
}

export default MainMenu;
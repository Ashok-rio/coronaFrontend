import React from 'react';
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';

const Headers = (props) => {

  return (
    <React.Fragment>
      <Navbar className={'nav-bar'} expand="md">
          <NavbarBrand className={'navBrand'} href="/">CORONA ALRET</NavbarBrand>
      </Navbar>
    </React.Fragment>
  );
}

export default Headers;
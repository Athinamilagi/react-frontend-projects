import React, { useState } from "react";
import styled from "styled-components";
function Header() {
  const [open, close] = useState(false);
  const closebtn = (e) => {
    if (open) {
      close(false);
    } else {
      close(true);
    }
  };
  return (
    <Container>
      <a href="/">
        <img src="/images/logo.svg" alt="logo" />
      </a>
      <Menu>
        <p>
          <a href="#Model S">Model S</a>
        </p>
        <p>
          <a href="#Model 3">Model 3</a>
        </p>
        <p>
          <a href="#Model X">Model X</a>
        </p>
        <p>
          <a href="#Model Y">Model Y</a>
        </p>
      </Menu>
      <RightMenu>
        <a href="/">shop</a>
        <a href="/">tesla account</a>
        <CustomMenu src="/images/burger-bar.png" alt="burger-menu" onClick={closebtn}/>
      </RightMenu>
      <BurgerMenu open={open}>
        <img src="/images/logout.png" alt="backbutton" onClick={closebtn} />
        <li>
          <a href="/">Model X</a>
        </li>
        <li>
          <a href="/">Model S</a>
        </li>
        <li>
          <a href="/">Model Y</a>
        </li>
        <li>
          <a href="/">Model 3</a>
        </li>
        <li>
          <a href="/">Existing Inventory</a>
        </li>
        <li>
          <a href="/">Used Inventory</a>
        </li>
        <li>
          <a href="/">Trade-in</a>
        </li>
        <li>
          <a href="/">CyberTruck</a>
        </li>
        <li>
          <a href="/">Roadster</a>
        </li>
        <li>
          <a href="/">Create Invntory</a>
        </li>
      </BurgerMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  left: 0;
  top: 0;
  right: 0;
  justify-content: space-between;
  z-index: 1;
`;
const Menu = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding: 0 0 0 105px;

  p {
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
  a {
    padding: 0 10px;
  }
  @media (max-width: 767px) {
    a {
      padding: 0 5px;
    }
    font-size: 12px;
  }
`;
const CustomMenu = styled.img`
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

const BurgerMenu = styled.div`
  font-weight: 900;
  padding: 20px;
  position: fixed;
  flex-direction: column;
  justify-content: start;
  text-align: start;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: white;
  width: 300px;
  z-index: 2;
  transform : ${props => props.open ? 'translateX(0)' : 'translateX(100%)' };
  transition: transform .5s ease-out;
  li {
    padding: 15px 0;
    list-style: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  }
  
  img {
    width: 30px;
    height: 30px;
    pointer : cursor;
  }
`;

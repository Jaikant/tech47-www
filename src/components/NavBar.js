import React, { useState } from 'react'
import Logo from '../assets/icons/Logo.svg'
import Menu from '../assets/icons/Menu.svg'
import styled from 'react-emotion'

const NavWrapper = styled.div`
  background: ${props => (props.white ? 'white' : null)};
  padding: 15px 30px 0px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MenuBar = props => {
  const [open, setOpen] = useState(false)
  const showMenu = () => {
    setOpen(current => !current)
  }
  return (
    <div onClick={showMenu}>
      {open ? (
        <p> open </p>
      ) : (
        <img src={Menu} width="30" height="11.5" alt="Menu" />
      )}
    </div>
  )
}

const NavBar = props => {
  return (
    <NavWrapper {...props}>
      <img src={Logo} width="110" height="30" alt="Logo" />
      {props.white ? null : <MenuBar />}
    </NavWrapper>
  )
}

export default NavBar

import React from 'react'
import styled from 'styled-components'

const HeaderPlaceholder = styled.div`
  width: 100%;
  display: block;
  height: 80px;
`;

const HeaderBase = styled.div`
  position: fixed;
  top: 0;

  height: 80px;
  box-sizing: border-box;
`;

const HeaderBackground = HeaderBase.extend`
  left: 0;
  right: 0;
  width: 100vw;
  background-color: #222;
`;

const StyledHeader = HeaderBase.extend`
  width: 100%;
  padding: 10px;

  display: flex;
  flex-direction: row;
  align-items: stretch;
`

const Header = ({ children }) => {
  return (<HeaderPlaceholder>
    <HeaderBackground />
    <StyledHeader>
      {children}
    </StyledHeader>
  </HeaderPlaceholder>)
}

export default Header
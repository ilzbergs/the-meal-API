import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Search from '../../pages/Search'

const NavBar = styled.header`
  position: absolute;
  height: 4rem;
  width: 100%;
  min-width: 25rem;
  border: 2px solid black;
  top: 0;
  /* margin: auto 0; */
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`
const NavLink = styled(Link)`
  min-width: 5rem;
  text-decoration: none;
  text-transform: uppercase;
  border: 2px solid green;
  line-height: 3rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: lightgreen;
  font-weight: 600;
  margin: 0 1rem;

  &:visited {
    color: black;
    font-weight: 600;
  }
`

const SearchField = styled.input`
  line-height: 3rem;
  background-color: lightgray;
  padding-left: 1rem;
  font-size: 1rem;
  border: 2px solid #1111;
`

const Nav: React.FC = () => {
  
  
  return (
    <><NavBar>
      <NavLink to="/">Home</NavLink>
     <Search/>
    </NavBar>
     
   
  </>
   
  )
}

export default Nav



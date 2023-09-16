import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"

const Container = styled.div`
  width: 200px;
  background-color: #87B6CC;
  /* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1.5px;S */
  position: fixed;
  top: 70px;
  bottom: 0;
  right: 0;
  left: 0;
  /* padding-left: 30px; */
  padding-bottom: 100px;
  padding-top: 50px;
`

const NavHold = styled(NavLink)`
  display: flex;
  padding: 20px;
`
const Icon = styled.div`
  margin-right: 10px;
`

const Span = styled.div`
  font-weight: bold;
`



const SideBar = () => {
  return (
    <Container>
      <NavHold to='/'
      
      style={({isActive}) => {
        return {
          color: isActive ? "white" : "black",
          background: isActive ? "#6CA6C1" : "transparent",
          textDecoration: "none",
        }
      }}
      
      >
        <Icon>ICON</Icon>
        <Span>MyDay</Span>
      </NavHold>

      <NavHold to='/important'
      
      style={({isActive}) => {
        return {
          color: isActive ? "white" : "black",
          background: isActive ? "#6CA6C1" : "transparent",
          textDecoration: "none",
        }
      }}
      
      >
        <Icon>ICON</Icon>
        <Span>Important</Span>
      </NavHold>

      <NavHold to='/board'
      
      style={({isActive}) => {
        return {
          color: isActive ? "white" : "black",
          background: isActive ? "#6CA6C1" : "transparent",
          textDecoration: "none",
        }
      }}
      
      >
        <Icon>ICON</Icon>
        <Span>Board</Span>
 
      </NavHold>


    </Container>
  )
}

export default SideBar
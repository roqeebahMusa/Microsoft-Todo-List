import styled from "@emotion/styled"
import {IoMdApps} from "react-icons/io"
import {VscSearch} from "react-icons/vsc"
import {IoSettingsOutline} from "react-icons/io5"
import {IoHelp} from "react-icons/io5"
import {VscMegaphone} from "react-icons/vsc"
// 
// 
// BsLayoutSidebar
// 
// 
// CiStar
// BsClipboard
// MdOutlineDateRange
// BsRepeat


  const Container = styled.div`
    height: 70px;
    width: 100%;
    background-color: #6CA6C1;
    position : fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `

  const Holder = styled.div`
    width: 10%;
    height: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;

  span {
    color: white;
    font-weight: 540;
    cursor: pointer;
  }
  span:hover {
    text-decoration: underline;
  }

  `

  const Icon = styled.div`
    color: white;
    font-size: 30px;
  `

  const SearchBox = styled.div`
    width: 30%;
    height: 60%;
    border-radius: 6px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `

  const Input = styled.input`
    width: 90%;
    height: 30%;
    border-radius: 10px;
    border: 0;
    padding-left: 20px;
    outline: 0;
  `

  const IconTwo = styled.div`
  color: #56cbf9;
  font-size: 20px;
  margin-top: 10px;
  margin-left: 20px;
  `
  const IconThree = styled.div`
    width: 15%;
    height: 90%;
    margin-right: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    font-size: 20px;
`

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: 1px solid white;
`




const NavBar = () => {
  return (
    <Container>
      <Holder>
        <Icon>
          <IoMdApps />
        </Icon>
        <span>To Do</span>
      </Holder>
      <SearchBox>
        <IconTwo>
          <VscSearch />
        </IconTwo>
        <Input placeholder="Search" />
      </SearchBox>
      <IconThree>
          <IoSettingsOutline />
          <IoHelp />
          <VscMegaphone />
          <Circle>RM</Circle>
      </IconThree>
    </Container>
  )
}

export default NavBar
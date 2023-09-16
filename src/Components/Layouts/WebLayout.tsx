// import React from 'react'
import NavBar from '../Blocks/NavBar'
import SideBar from '../Blocks/SideBar'
import { Outlet } from "react-router-dom"
import styled from "@emotion/styled"

const LayerContainer = styled.div`
  margin-left: 250px;
  margin-top: 75px;
`


const WebLayout = () => {
  return (
    <LayerContainer>
        <NavBar />
        <SideBar />
        <Outlet />
    </LayerContainer>
  )
}

export default WebLayout
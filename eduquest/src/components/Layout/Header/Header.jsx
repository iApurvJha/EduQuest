import React from 'react'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react'
import {ColorModeSwitcher} from "../../../ColorModeSwitcher"
import {RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill} from "react-icons/ri"
import { Link, NavLink } from 'react-router-dom'

function Header() {
    const {isOpen,onOpen,onClose} = useDisclosure()
    const isAuthenticated=true
    const user = {
        role:"admin"
    }

    const LinkButton = ({url="/" , title="Home" , onClose})=>{
        return (
            <NavLink  onClick={onClose} to={url}>
                <Button variant={"ghost"}>{title}</Button>
            </NavLink>
        )

    }
    function logOutHandler(){
        console.log("log")
        onClose()
    }

  return (
    <div>
      <ColorModeSwitcher  />
      <Button onClick={onOpen} colorScheme='yellow' width='12' height="12" rounded="full" position={"fixed"} top="6" left={"6"}>
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={"blur(1px)"}/>
        <DrawerContent>
            <DrawerHeader borderBottomWidth={"2px"}>EduQuest</DrawerHeader>
            <DrawerBody>
                <VStack spacing="4" alignItems={"flex-start"}>
                    {/* <NavLink to="/">
                        <Button variant={"ghost"}>Home</Button>

                    </NavLink> */}
                    <LinkButton onClose={onClose} url="/" title='Home' />
                    <LinkButton onClose={onClose} url="/course" title='Browse All Courses' />
                    <LinkButton onClose={onClose} url="/request" title='Request A Course' />
                    <LinkButton onClose={onClose} url="/contact" title='Contact Us' />
                    <LinkButton onClose={onClose} url="/about" title='About' />
                </VStack>
                <HStack justifyContent={"space-evenly"} position={"absolute"} bottom={"2rem"} width={"80%"}>
                        {isAuthenticated?<>
                            <VStack>
                                <HStack>
                                    <NavLink to="/profile">
                                        <Button variant={"ghost"} borderWidth={"2px"} colorScheme='yellow'>Profile</Button>
                                    </NavLink>
                                        <p style={{cursor:"pointer"}}>OR</p>
                                        <Button onClick={logOutHandler}  colorScheme='yellow'><RiLogoutBoxLine />Log out</Button>
                        

                                </HStack>
                                {user && user.role ==="admin" && (<Link to="/admin/dashboard">
                                    <Button colorScheme='purple' variant={"ghost"}><RiDashboardFill />Dashboard</Button>
                                </Link>)}
                            </VStack>
                        </>:<>
                            <NavLink to="/login">
                                <Button colorScheme='yellow'>Login</Button>
                            </NavLink>
                            <p style={{cursor:"pointer"}}>OR</p>
                            <NavLink to="/register">
                                <Button colorScheme='yellow'>Register</Button>
                            </NavLink>
                        </>}

                </HStack>
            </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default Header

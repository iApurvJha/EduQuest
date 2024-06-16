import React from 'react'
import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import  "./Home.css"
import { Button } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
import vg from "../../assets/images/logo.png"
import vdo from "../../assets/videos/sample.mp4"
import {CgGoogle,CgYoutube} from "react-icons/cg"
import {SiCoursera,SiUdemy} from "react-icons/si"
import {DiAws} from "react-icons/di"

function Home() {
  return (
    <section className='home'>
        <div className='container'>
            <Stack
                direction={["column","row"]}
                height="100%"
                justifyContent={["center","space-between"]}
                alignItems="center"
                spacing={["16","56"]}
            >
        
                <VStack width={"full"} alignItems={["center","flex-end"]}>
                    <Heading children="Learn form the experts" size={"2xl"} />
                    <Text children="Find valueable contents at valid price" />
                    <NavLink to="/courses"><Button size={"lg"} colorScheme='yellow'>Explore Now</Button></NavLink>
                
                </VStack>
                <Image className='vg-graphic' boxSize={"md"} src={vg} objectFit={'contain'} ></Image>
            </Stack>
        </div>
        <Box padding={"3"} bg='blackAlpha.800'>
            <Heading
                textAlign={"center"}
                fontFamily={"body"}
                color={"yellow.400"}
                children="Our Brands"
            >
            </Heading>
            <HStack className='brandsBanner' justifyContent={"space-evenly"} marginTop="4">
                <CgGoogle />
                <CgYoutube />
                <SiCoursera />
                <SiUdemy />
                <DiAws />
            </HStack>
        </Box>

        <div className='container2'>
            <video
                autoPlay
                controls
                src={vdo}
                controlsList='nodownload nofullscreen noremoteplayback'
                disablePictureInPicture
                disableRemotePlayback
            >
            </video>
        </div>
           

            




    </section>
  )
}

export default Home

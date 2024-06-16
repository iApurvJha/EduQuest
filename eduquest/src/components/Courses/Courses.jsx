import { Button, Stack,Image , Container, HStack, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import "../Home/Home.css"

function Courses() {
  const [keyword,setKeyword]=useState()
  const [category,setCategory]=useState()
  const addToPlaylistHandler = ()=>{
    console.log('added to playlist')
  }


  const CourseCard = ({views,title,imgSrc,id,addToPlaylistHandler,creator,description,lectureCount})=>{
    return(
      <VStack
        className='courses'
        alignItems={['center','flex-start']}
       >
        <Image src={imgSrc} boxSize="60" objectFit={'contain'} />
        <Heading fontSize={"x-large"} textAlign={['center','left']} maxW="200px" fontFamily={'sans-serif'}  noOfLines="3" children={title} />
        <Text
          noOfLines={"3"}
          children={description}
        >

        </Text>
        <HStack >
          <Text fontWeight={"bold"} textTransform={"uppercase"} children="Creator"></Text>
          <Text fontWeight={"bold"} textTransform={"uppercase"} children={creator}></Text>
        </HStack>
        <Heading size={"xs"} textAlign={"center"} children={`Lectures ${lectureCount}`} textTransform={'uppercase'} />
        <Heading size={"xs"}  children={`Views ${views}`} textTransform={'uppercase'} />

        <Stack
          direction={['column','row']}
          alignItems={'center'}
        >
          <NavLink to={`/course/${id}`}>
            <Button colorScheme='yellow'>Watch Now</Button>
            
          </NavLink>
          <Button variant={"ghost"} colorScheme='yellow' onClick={()=>{
            addToPlaylistHandler(id)
          }}>Add to playlist</Button>
        </Stack>
      </VStack>
    

    )

  }

  const categories = ["Web Devlopment","Artificial Intelligence","Data Structure & Algo's","Data Science","Machine Learning"] 
  return (
    <>
        <Container minH={"95vh"} maxW={"container.lg"} paddingY={"8"} >
          <Heading children="All courses" m={"8"}/>
          <Input value={keyword} placeholder='Search a Course...' type='text' focusBorderColor='yellow.500' onChange={(e)=>{
            setKeyword(e.target.value)
          }} />
          <HStack overflowX={"auto"} paddingY={"8"} justifyContent={"space-evenly"}>
          {categories.map((item,ind)=>(
            <Button minW="fit-content" key={ind} onClick={((e)=>{
              setCategory(item)
              // console.log(item)
            })}>
              <Text>
                {item}
              </Text>
            </Button>
          ))}
           
          </HStack>

          <Stack 
            direction={['column','row']}
            flexWrap={'wrap'}
            justifyContent={['flex-start','space-evenly']}
            alignItems={['center','flex-start']}

           >
            <CourseCard
              views={23}
              title={'Sample Course'}
              imgSrc={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVGBcYFxcWFRUYFRgXFRUWFhUXFxUYHSggGBolHRUVITEhJSkrLi4uGB8zODMsNygtLisBCgoKDg0OGxAQGy0mICUtLS0vLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAQIDBAYAB//EAEEQAAEDAgQDBQUGBAUDBQAAAAEAAhEDIQQSMUEFUWEGInGBkRMyobHBQlKC0eHwFCMzcjRikrLxc6LCFRZ0s+L/xAAaAQACAwEBAAAAAAAAAAAAAAAABAECAwUG/8QALhEAAgIBBAAEBQMFAQAAAAAAAAECEQMEEiExMkFhcRMiM1GBQpHBFCNDsfAF/9oADAMBAAIRAxEAPwCvCWEsJQFBsJCUBOASgIAQBOhLCUBACAJwC4BOAQBwCWEoC5slVcki8YOXRwCWFYpUCeUcyRHoFI/DRuqPLFds0WCb6RUVmhhS4To0blVqrw094+Max0Ta/Fw9wY3usHyGqxnqVXyjGLRyb+Yu+zbo1rnnnePIC6mbgXHVseH6oRW7SZBDLDnYE+agb2jrP9wTGsT81h/UT8jf+jjYbqYNw1af34KP2BScK4i5x/mCNyTJJ6NB18UZnPfugcu9Po1C1kl2iktHHyAhamkgbopiKLdACPEGfKbqLD8NmSQTy3WsdXvdRRk9IordJlFq6Far4Ut1HyULmEbJpMUcXfRFCaQpXNhNIVipEQmkKUhNIQQREJCFIQmkKQI1ykypEAVwEsJUoCAEATgFwCcAgDgEoCUBOAUAIAlhOAUVafL5qJOkXhHc6HlpNgfFTU8I46R4m8dYUNPuiSRO03jrHNFKVSGi5jmdXdUnlyNHQxYUyTAYBouQXHm78tlFjKZJIEADU/QInhq4FzysFDToZr9SekpOdyGY/K2AsVh2U2l7rnbMbeJH0QxuDxGIu1sA6EwLeAWup4Jr7uvlcSPxQPp8VaxB9mx2UbWHQBQlRf4vkjIcP7P0qR9pi3hx+yy8HyFyPhzWrGEbVYCykQ2O7GRojoD9FlcIHVnOfUALQbyJJjUDl+qI8a7WnDUoYAHmzRlJDfHaekqy+Z0yuRNcrsp8UoOoumPUiUCq9paxcWguaBrsf0UB4nVqS6o4uJ1nyUdNzC8OqCfHpuesfJG1J8l1JtGt4Di/axmNR/i85fICM3otX/LYLwOgJCw9PtY1gyUmsY0WLgL+v0Cq1e1bdGNL3bvqElo/tYLeZlEbXRSUdz5Ns+tn9wW+8foSqr6rWmzZPMm/lsFFwDi4qNHtWmD9oGWj4WRDG4PWGm152ITeFJ8sU1G6PCBNSJt8dUyFK5qSE4jnshITS1TEJpCkghITSFMQmEIII8q5PhcgCmEq4JQFICgJwC4BOAUAcAngLgE4BAHAKKs64A1M+XMqw1qc7DfaPIfEqsujbCnu4A+NqgEDl8ZVrh+IL3NB0Gv5fRD+L12tcYudByHPzv8AFUaePyX3tHn+yudle5nZxx2xo1+Jxne/LbkFfwGJAjMYBIHxj5/IrCUuIElznHefNT4jjJho8z5W+hWSVMlxtUbWhigGyTeSD6n9VVxdZwHtM4DRqXHugHe1ySbAAEnYLJ1OIOOYA6yfW6lfjarWhjnAkCWGTDSRLmu+7LSZN5aCNr2xY975Mc8vhRtdsOfxzWZoc0vDnMhuUgx75IGmwjUXlDCw1oz0nODfdDWVHASe+e4D3yA3W1kD/wDTKkD2jwxhs2nSHecBqXTZrRexmPGQvRuxfA2MYfYjK59nVDBc0ADPB5gnLHMEpuGKKdCE886sD8N4LTZ/iMlGROWpUptdJ/y5pVniHYWlVbmpv1uOS2Fbs9gg0gtJJ1cSZJ3J5lYjF038PqmphSXUdatK+SCbva0e7UHMa79LvT0iIZsj5RmeK9k61KwuAsyA9j8rhB5fkV7rUq06zAWua4OAIgi4cJB8CDKwXG+BNr4plNrsv3oAJJkQADvceHwWCi7oYWZVbO7B181X2Z0cD6i4PjqvQnNLWZSLt/5CwlOiMK6MLQdiajDDqz3hlORYhke+diUV4V27zVRhsXQNCo+1NxOam87NzQIcZga3gSCROmPFKK5K5cylTLFSlBuo8m/p++Su16hkyPgPl+aqvvcplCTogyppCmLU0hWKkBCaQpnNTCEARQuT4SoIBwCeAuhOAUgcAnALgE9rVAHAK5hsIXJMLQJR/A0ICDfHjvllKhw2LlU+0zQ1jYtM/D9CVonuhCuKYcVBld4jzEG6zyK4tDmCCUrPPsXQLjm2iB/x6oY9hLwNJstHjgKdSXDui5Hw28UB4nQhxeBmbqPA7j1SbjwOyI8T3QPH6qLMC65sNT4bKlV4jIMzLbzrbqlw2KaaReB3muaIOl3CZHMjdCxNmE9RGIVY17nNbTaYP2iDkjkXaf8AKq4M1Q9zalSoSMrGhzXAtlwDiAR3iO73r23RrguMeyuGVHZ2gttm+y8mmQ2dIIDhGkIVxHi1LEAmmS4sc1xBaRYnSHWOngtYR2tpCeXJ8RJsv4jiwa8iBaG2IOVogBltIuI6LUdmu0Zp0HgAA+0vHUTPmQ70XmPtRnJFtDt5/FG8BjMsgRkeRmECWuA2OvUc78wrY3tlZDqS9jeVO0j3Aib22kxeYG50QjG8Ue11xcgE+cgiEvBsEHPzNcHtGjhp6G4PQ3S8QwbnVMwbZxhg+04AahuuW3vadUw273Xx9jdbVAzHGId/D5RBiozW4ayq5w8YFQADotLwLHMpmx73s3QbyMtNz5PW49EK7QBgosLC12Uuhwv380Pg8pcR4AILw7iMFr9QCCQDctAyuHp8isbaFNsXdnquF45RNAMAblpgAD4Az15rPcWwTcbh3hwgicpn3XAS1wOu8eqC8L7lTLq1wMci03CK4njn8PTqMa0F1RuVtrNBFz5Ldyb9hvbHZ0FOz+LdXwlCq73y0tf1dTJYXHqYB8ZV4tTOzWBNLC02OAlgggkDvO7755kOc4eSnfcyqpnOaoiITSFLCY4KSCIhRuCnIUZCkCKEikhcgAaAntCQBPAUkCgK3hqM6qCiySiQaAAJ0UMZwYt75LtDK1WmYrZUqVORrCmpNDdbzz/JVsecYlmoQBJKBcTxuS4RYmdFk+1IhhIUMvipAfFTXeJ+HJS8ZpF9M06TRNvhrf8AeiEcOrlpPOJ6gchyV7BcYMlsDRxtuGkA7a7+SVyS5pG0XuVgVvZGuIe1zXNcwCo0El4MCYaB3rgadVUpcKq0yQ2m7QzmiCP7djy5c1p8dxZ9M2A5+ITK/GHVKYc0CCSDAvI1klR8SdC702NOjI0XvpzlYWk2mS4+U6aqbCM9n38pEiDy1BFh4LSUq7DAdSEncRPmrDMG10jLYqI5XfRE9KkuDG47DFv8xt2E2IMxza4a+alw1XKC4GbQZ0v9VexeGdRccmh2P7uqbcFTeA4d12/lA28j5phVIScZQZYwvEYIcC9pG7bn/UHAopgcWcQ8sa5xLy1rqjnfeMECNbETcrOPwRJiSfMwtf2N4Y51RuUd2mczibSVEnS7JUbfQvbPs47CNaGuLqLycvNry0BzT4gSPA8r49jnNIm4Agco6dJ+ZC954hVwtag6jVc0iL3EgjQjqF5iezT2EjLnZq1/MEjKSNpBCtB2qI+HKTB/DeIRDSDI93ptadAtfwThFSrUbUc1oi4cS1xHLKAMs9SCQdlVw3ZgNbqJJMSSGghrjoNgS30Wq4ZQNibOgWm0wqytG6jw1Jl+ngA2xAgciR0VetTmcogD4p9eq8m4jwVeoTufitEhPJKL6IyE0hOhIQrmRGQmOClIUZCCRkLk6EikAaAnhIAnBSQTYUXlPxVWPoo6ToKXGNnvbKrOho5Lodh8UR9EQoOLrlBBFpV6liw2w1WY819g2150lCu0NEOpkFs2/dwiFJ7YklR4lzXCFJklyeQUMb7Oo7MN9On7+alxGL/mCtSiWEnLsQdRHIgn1RDtZgSx92hwOjt/CVnmtyXJvyGqyyRXZSMpJ7fI1+AfQxTQ1kZgL03GHt6A6ObyK7EcINJpyg5LnKefMFZqlwqo9jqxlmUSHaHyI3VY8WxZAYaziw2uBP8AqiVioX0zSWVxVyRpcBhi9w5D5rT0MLAWd7NVSBDtR+5WspVQUUUlJvkB8U4XmuAs3/Aua4tygk6BwkeML0UAFT4PA082fKM3PdWVroxlJNcmV4P2SrVYLoYOcQfJWsb2ZxVMGlRcW0yZzg96DqOl91tsRxOlQbL3Bo6oZi+2mHA/lg1T0ByjxdHyU192ZxnN8RRicJwmpTLmHM6Ncz3Gb9ZO6NUcBXDstSuWlwDwALROwm2mimw/afD1KozU8rnkNcQ+w5OgjbfpKO8YwsvY5kOLKbQRaHNJLgRPKVMXStGnLkoyB+DwpzS95cQIEsIaB0AtKuusbJ1BpOoczx09SmvHJbQdmGo46FFU7KMpVyulQs232NSFKkKkga5MKc5NKCRq5cuQAOCc1IE8KxAoClZcZSownNKg0xy2uwfijDoVYV8rpOqucXMQeaEVjJWTR2YTtBjB4+XST4DZaSg/MAYAWCougrScJrOduhFpKyXjvDm1WwR5j6Lz2riHYZxa2mCRu9gJvuDC9Rq3EGFle0uC/lvttKmlLgwmqVmRxOKrYgfzKgazXKLT5DVMGFzOZaG2idTfVC8Pi8jpiT1v80Zwbqr6jKj7tJ9DyP0WLxtGKzwlw+w7i6HsocNN1Lh8f1RPG4fOzyWUxFJzDZUqy2409HHojh+JRusPSxxGqK4PFNdqUVRR0zZ0uJUz7zQ7xAPzVTifaBjR3WgeFvkm8Np0jFwUWc+gwTDZ8lUontfBnuA1xiqpZUaDTLXB3mNfEa+S1eIw+bvNJEaAHQaADyhC6OIpik+o0AOc4MEeZPwB9UV4ZiJEHkmcUVtJk5Sbl+Ci5vOT5lIrnEKAaZGhVNaJUJzlJvk5IuK5SUGlIUqQoAYU0pxTSgkRIlXKaAHhPCaE8IAVKAkCcFAA/jdIlrSgjKskzpoOkLW1mB7C0rOYnAOBNrBQzp4Z3FFcVRpurNPGEGxWW4xxPISB73yTuF4/OJJ0+Z2AVGjWOaN7T0bhvE+6BCJVh7RhMDzWNwGMDY3WjwnFmkZdT0UJmko30YDE8Kp531GQQxxZVZ9x8xIH3Tt6IrgaQaY1kQW7QP3qpu1eHNGqMVSgZ+68RLSYuHDcED4JvC8ayrHsyGVBrTfqR/kd9ofHmqxy7Xtkc7Pp34ofsaGk4ERKE8VwINwr/tIaMoBP3dL7+CfWu2duuonY/miUK5RnizXw+zE1sOQq7gW6EhaHFULodiqAhVNmXODU3uw9XEOqZW0g4gZTLsrZImRHJDB2mBF2O/1BS1+I5cG6lp7wPUut8istSdeOavGKZTe06NBU7RVS5sCGNnuTNzEknc2Hgt12Z4wyrBDvEcl5kymrGGe6m4PY7K796q17RqHKo94e0PZ8kJq0i3WPVZ3sv20YYp4iGO0DvsHz281pcWBMjQ3BGispJ9CefHtZAkKVIrCw1IUqQoJGFNKcU0oARcuXKaAohOCQJwQAoSrgnKCRIQ/jlcsoVHDUNKmx/EqVGPaOgnQQSTHQLO8U4yawyMbDTudTCiUkjbDuTswOLPfObNe9xGt+a6hXye6tNWwQIuAhWI4QNWiDy2P5HqPMFUU0yJQlF7kS4LjAAub/AERXCcbAu28b7SFlP4aDuNjz6g9f2FJUYWCWG248d0Sia49VJcM13HMTVNJoNUPBDarm5C3KH91rg6Ye3MS3aDtcIMDYEGCLgjUHYhEaHEAMIG1WHPkqMZNu68ggkG+WQ1w/s6obR0SrvzGoSsP8I7TkHLiBMWNRo73QuGhWpw9QOIe0hzSO64HukbiPoV5p7rp2KJ8N4i/DnNTu03cw+6fDkVMcjg/Qyy6ZZFfTNvjcBIzMH4R9PyWdxgRWhxwPph1O94M6sPJ356fJN4lw59Zpc2M8a6A9Hfn620Y2qS3RE45JY3tyGC4tXk5RoFRZv6+idimuD3BwIcCQQbEEaghOwbJdCvFETd8l6joDsfgdwrMWTOGUrFp0O/IjQqx7IiRuNVE+EOaae7gipsmx0RrAYivQGWnUcB9x0wPI/khjWwJVrCmb9Yjdc+Tp2jpKMXww/Q7Q4ge9TDuZbH5j5K7S7StMA0nibe64/wDig1Kr8ES4RgzUdmcO6Nev+Xw5+iMeXK5bUY59PghHdJGgo1czQ4WlOK5cV00cR98DSmFPKagBq5LC5SBRCcEgT2hDAUJ3VK9oaJe6Ogif0QXiL6jvcqHL91zWEf8Aa0H5pbLqYY+PMcw6OeTl8IodosFSr1GvzuJY0tiYpi5OY9b+FkKocGrt71F2YAaPsXdGu1P4rLR4HBg3fBOwiAPBp18T8EVbTXJya6e7g6a0uOMdtGPwtRtWWuaWPaYIjfWHN+yfCx2Vg4UFvUIr2g4C3ENzCBVaLG4DgL5XEXjkdjfmCP4Vii8FlSfassc3vHLqHf5h8QZGqbw545Y2u/sKTxuD56MzxTDgX9dgR47dD+qqUy2gC58Pd9insN81Tp/l+mum4vhTZzQC5pBg3Bi8FY/iFcl2f2eWS5xm5JJMgchdOQe5UJ5I7XY12JqPcX1JJcZkq/hXSqtPv0hG0x5fopsIq5Y0a6Wd8Ft7JXNEKSU15slJPk6KSLnA6TjWGW2sxu0c+kkL0LCDu21CxXY97faPkgHK0N6ySXAf6QtLxHH06Lc7zAb3voLbkmwG58Culp1UDha2W7LS8gT234dSewV3Q2o0DS2dpNg/rEkcg3qIwvDTDnO5NPqYAVzj3G34kybCTDZmB1O7juekCyoUbNIHvHT6FTfNlUqVGn4Zh5DTFiEYr8ONRsgd4epHLx/e9gOEqtJBaRtDCQHt/wAsawL94Wi/NGeM9rKeFHs2NFWtlAdNmNkfa3JP3fWFVf3E00aNvDKMoOwd7OFzYCbw3iBr0zUqAB2Z0kWBOsgbap+Dw7qrwxg136bnwHP9FzZRe7ad+OWLgp+Rf4ZhHVn5W2Au53Ifny/RbKjSDGhrRAFgFFgcG2kwMb5ncnmVYT+HEsa9TjanUPLL0OXFcuK2FhpSJSkQAiVclQAPahvaGtXZSBoWMw42kNjUTpfdEwhPaIkhrLgbnmdPhz5ys80tsWxjTY3PIjHnF4wOkXnnf8kTwfGMQ0zWw7i3mzbyVmjw8GMgmNXZjqfPYD4oxQolpgOB6O+QcNPMFcjNmj00jsxxyXO5k3D8XSrDMx0gWI0IPIzoUZZhYvqPUj81nf4X+Z7SmfZVhuR3XD7rxMOb1nzGx/h/EcwkjK5tqjPuk7/2mDB36EEJOWNNXHr/AEROcuiR9Plosr2qwuQjFMsWwKkfd+y/xbN+bSRyWtxLYuNCh+MYHNLSLEEHwKpim8c1JEKO+NMzbHe2AcCNIcBs4agINxrhwEmOv0Kt8DcadV1B8w0kAi2nuze/d6fZCm4vUGn75Lup+aEWuKZjsIPZvNM6Ou39/vRSVw5numBIOkjW9lcxeCL6eZvvMuPw7KH+Ia5oMieW87hMpqURKnjlwWW1MzZt5adIVU1NeaZ7SD3dJP5lQ1nG/wAEu8Z0I5rVh3g9VrPakwe8BcxAY0d7oAd/BCOK8TdXqXJyA2BOu2Yzvt0EBV8c9wBYPdJDzA1zAEA9BKjw1PnP5+f1TUeIo5s1eR+5abhCbkW209FJhmZe8dQRbqdArOGe0N1uJPIHw9EmJBf3rad2+h2PipVSIdwEfxL2UuEGq7S1mjY+A2G5v4hCCbkyTck6km5JPNPqUnGXeat4LDZsjm6t96TYmSRblGVWuiiVhLhuObToNYQSZcdIF3Ea+S33YxlM03AD+bq465m7ZeQHLz3XnQqzPSxBvoInqDHxR7szxA0ngj7JHmw/p8krFJS3HRcnKCg+j0MpFPUIcM7fPz0KgTIlOLi6OXFckKCoi5cuUgIlSLlAFKdOpAHiTCqcWyl5GrRDb3sBCJULS86NHxOn19FnsTWJkjW6U1fKo6mgjw5FyhTAENAA5Cyn9lmEFVOHNfElsEmTqIbNp5OLY81ebUAPRcaeJxbbOipX0QNk5mn3mb8wbg/AjxBSYaqXw9ke0aDE6Pb9qm70+HMCHVXRVb/mpuB/A5pH+9yBYHGGnXc3k6R67KIJp2iJRUlTNhgsYHtiLHTTYwQeoIIPUKvVGyoV63s6jXj+nVPk2poJ5B0Zf9HVWalWRKynCnx0ymNGP7RzSxDKg+22PxMMj5qZ2C/iIrNeGteARIJI2IgW+Kk7ZNltNw2cRP8Ac0oRwjGxQDJ90u+ZXY0zvCn+BLUcZmvvyPrvFGpkJkOgTEXNvyUXD+EsJcTeD7u0H57+ii4pVD23gkQRzkCDHr8FHh+JQ6WkXEEHfwg7GU0k6tCzacqZPxbDiWkWEwYGnK3qEOrs0tpby2RrEUC5skzIsdAN7BD69WWTvHxVHLo2ilyQ1xDaTrQ5hHWWOLflCqtG0X0EAnptzjXqjHFMIW0aIi7QZ/FDp+SG0aeZwbubeH6LXHLchfPDZJk2HpuaJEHmdRbYdB8fIKc4YPcXRlG42ndGBg2sYBIAAvPIC6tcFwGdvtCLG4B/fgmIxEZ5F2zK8Xhjco1MfJVMLii1sGRbXKDa+txzKJ8eh9XTQAev6K9wjDNre0pGLsjzOnp3VlknTGcGJzQA4NVaKkPBcHCBPMaWWgxDQwNeG5bhunMEj5H1WYoF4cIHeYdIvLdR81usZxcYmiaT6cZ8r6bw4DK5szAjlqD1USSLQlxRpezWPmmAT7pAM/dNiPiD+FFajIJHIrCcHxJpuId0PjlM/ESt5VqZodzAnxUwZpmVxUkMSFKUiuLCJEqRBByVIuQBHjBFADdxJ8gICytGrc25rR4vEhzmtGg7v0QLE02sfA3sfM/lKR1FM7WlW2NErMTLbGLlKypcNveb+CpUqTswI0m/RT1wcwI2mFlJxcK9BvGnbsmNT+ZS/tf/AOCzXGH5axcEU/jAKzeTWx5n/gKlxujJlK441JWRLp0EsHXFWk6mTZwjwP2XDqCAR4BWOH4zO3vWOhHJwJa8eTgVlsHiC2yJ8OxMVSPvd7/VAPxDj5qJ4aT/AHCMk2n9yXtMc1A89fMFZvh3B61VzWDNDmhwy7zBifxBHuPOPszG0/mgWD41Up+zykjK2B1Eu+jgPJPaD6bRzf8A0F86foFv/asODS0ZnSNz1Ekzy2VDiPB/YU390ZiA5hIEtylrzG4Ba6PwlOZx2oTIm2/x1VHGcSc91zOg8u9b/uTqsRlS6JcPxIvpQLFtj05R+9l3CsI6q+CJY2C8872bPM2+JVRtCCHCIdFp56eF1p6bW0mCk0gxJcR9p5s4+A0HnzSuaagqXmOabG8krfkdiHZn8xfwvqgWNw5ovt0c09P3ZGaJuE/ieF9owiO8yXN6iJc30v5LPBOuBzVYt0bXkD3zVb7QuOUatE7cwtS7iADAGWgARodP+FhMJiCwxsfQo7hqxDC9x2nX0v8AqunCdnn8uOgJiHy9xPM+gt9ER7DvzVXO+8fhIj5BAsVUsTuZR7sC3vD97pTM+L9Tp6Jf3EvQh4vw3LjqrA3u3qTuGmCS3kQST5Kxh6g71M6TmHQkkOjl3mk/iV/t/LKgqss73XHmxwIv8fVZDC4szM6iPktatGOVfDy1/wByHKeI7ziNAcwBMxeCJPOfgt/wjF5/NoPy/NeYU2mT3ruBA8Tp8VueyzgC0A2iPID9ERavg0hFuE0/salIV0pCVoJiLlyRACrkiVAGbpktoS27vqglTFGpULouTom4zFZX5Xy5rTlA5Hcjkd56KvhK2ch/3oPruufm5R2sL5NHQsLqHGY9oBa3vO6beJ229ELxVRxm5jYc7gekkbqvw7FZnGmW5YnwHn+5sVi4NKzd5U5KIx7jMnXVEqpzsB3hDMc2FPw6vaFWStWEXToHVhlcreDd/Ma7kD9P1UPFW3BCZgXS6NgNeZJ//JV380bKJpSoN4pmdpHiPgFiHMdIp6HNF9Ol+Wi2DK2vj9APos7j3RXkNBJFgeZkBX0jcW0Ya+KcVIJ062HpAMNRvhMuJ3MDdB8RRpl5yF4JMN7sNkG4OYc4UrIotNMMAcRFQagkOBmxuA5oiOsymNxGZwFQAtvoAAMxEugbjXY9U3GLVtHNcr4YprOLWgkwSCBEAa20GkFXKWIymCY6nbx6KvhqJ9q5pJcW2kzfYG5MWvHVLjGwssnLod06cY7gzTIt+/TortSoQQ8aiPULKYPiZpnLUEs6e82dx06LR0cQIG7To4XBCWnFxH8eSM0DeK4Vrajg0QHDOzpN4joQ4eSp4fEONN7fsi56eCKdqWhooPBs4OA8WOB15d9Jhyym8U6VJteo8Gz2ty2nM/vC2jgBGg5p1SaVnIyQjva+zM5VuDyA+JWr7CU7fh+iCcQcypTNRlMUyCQ9o90GNQP+Fo+wwgN/tHyCy1Erh+TfRxrI/Ys9rWB7X5gTLLR94XHxWLocP75Z7QMEAhz7RIkCB9q8R0Wt7W4hjWlju8TcAaAAiZkeAWNw9V1Kq4Nt3nDQaGRbyWuGbnGymtcfiL0ClQUmuGakA9kA5TUN26nP7SCfAAdVpeydQF4y+7PdnUAg2PX9yVkCtL2Ns8dSP38fgtaMcMnua9Gb0rly5XFzki5cgDlySVyAPP8AtH/Qqf8AWH/1PVThfus8G/JcuSOo8P5OrpfET4zUf2v/ANq4/wBGn/8AHofIrlyrLwF/8xUxOi7Arlyy/Sb/AKjuI6KDh2/l9Vy5Wj9NlJfVRfpe76oDxb+r6fNKuVtP42Z6z6QrtvP/AHFVaXut/e65cnV0cnzDtL+tU8GqDGfU/MrlyUfZ1IeD9wLi9Voez/8Ahx/c/wCbVy5WzeAjTfVfsXeN/wBPBf8AVf8AOih+D/xrPB/zqrly0j4V7C2X6j9yjX/pV/7/AKrTdkfdH9oXLljqfB+f4N9H4/x/IO7Yf1Pwj5tQDG/1W/h/3Lly2weCPsLanxy90WitD2V/qM8vouXLcpg8R6EuXLlYXESLlyCTly5cpIP/2Q=="}
              id={5}
              creator={"Sample Creator"}
              lectureCount={5}
              description={'Sample Description'}
              addToPlaylistHandler={addToPlaylistHandler}
          />

          </Stack>

        </Container>
    </>
  )
}

export default Courses

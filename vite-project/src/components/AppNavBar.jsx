import { Flex, HStack, Link, Button, Text, Heading,Image,Avatar } from "@chakra-ui/react";
import Logo  from "../assets/logotransparan.png"
// import { Link } from '@chakra-ui/react'
const AppNavBar = () => {
  return (
    <>
      <div>
        <Flex
          w={"100%"}
          px={6}
          py={5}
          align={"center"} 
          justify={"space-between"}
        >
          {/* <Image src={Logo} boxSize="" objectFit="cover" borderRadius="full" /> */}
          <Avatar src={Logo}></Avatar>
          <HStack as={"nav"} spacing={"5"}>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Contact</Link>
          </HStack>
        </Flex>
      </div>
    </>
  );
};

export default AppNavBar;

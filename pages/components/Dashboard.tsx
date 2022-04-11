import { 
    Box, 
    Button, 
    Flex, 
    Link, 
    Text,
    Stack, 
    Divider,
    Spacer
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { CaretLeft } from "phosphor-react";
import * as React from "react";


const Dashboard = () => {
  const router = useRouter();

  return (
    <>
      <Box as="section" p={{ base: "3", md: "10px 140px" }}>
      <Link
        color="indigo.500"
        fontSize={'sm'}
        onClick={() => router.push(`/`)}>
        <Flex><CaretLeft size={20} /> See all projects</Flex> 
      </Link>
      <Text
        fontSize="3xl"
        lineHeight="9"
        fontWeight="semibold"
        color="gray.500"
      >
        My dashboard
      </Text>
      <Flex mt="65px" backgroundColor={'#F1F2F6'} justifyContent={'center'} >
        <Box
          px={{ base: "4", md: "6" }}
          py={{ base: "5", md: "6" }}
          borderRadius="lg"
        >
          
        </Box>
      </Flex>
    </Box>
    </>
  );
};

export default Dashboard;

import type { NextPage } from "next";
import {
  Box,
  Text,
  Image,
  Stack,
  Spacer,
  Flex,
  Link,
} from "@chakra-ui/react";

interface Props {
  tag: string;
  title: string;
  author: string;
  cover: string;
  link: string;
}

const Post: NextPage<Props> = ({
  tag,
  title,
  author,
  cover,
  link,
}) => (
  <Flex
    flexDirection={"column"}
    maxW={"384px"}
    w={"full"}
    bg={"white"}
    boxShadow={"2xl"}
    rounded={"md"}
    p={6}
    overflow={"hidden"}
    mx="auto"
    minH="420px"
  >
    <Box bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
      <Image src={cover} alt={title} />
    </Box>
    <Stack textAlign={"left"}>
      <Text
        color={"gray.500"}
        textTransform={"uppercase"}
        fontWeight={800}
        fontSize={"sm"}
        letterSpacing="0.6px"
      >
        {tag}
      </Text>
      <Link target={"_blank"} href={link} variant="link" p={0} color={"gray.700"} fontWeight="bold">
        {title}
      </Link>
      {/* <Text color={"gray.500"}>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </Text> */}
    </Stack>
    <Spacer />
    <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
      <Text>{author}</Text>
      <Spacer />
      {/* <Text color={"gray.500"}>{duration} read</Text> */}
    </Stack>
  </Flex>
);

export default Post;

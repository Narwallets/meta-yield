import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  StackProps,
  Text,
  useBreakpointValue,
  useColorModeValue,
  Wrap,
  Tag,
} from "@chakra-ui/react";
import * as React from "react";
import { FavouriteButton } from "./FavouriteButton";
import { CircleWavyCheck } from "phosphor-react";
interface Props {
  project: any;
  rootProps?: StackProps;
}

export const ProjectCard = (props: Props) => {
  const { project, rootProps } = props;
  const {
    name,
    imageUrl,
    motto,
    avatarUrl,
    verified,
    active,
    description,
    tags,
  } = project;
  return (
    <Stack spacing={useBreakpointValue({ base: "4", md: "5" })} {...rootProps}>
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={imageUrl}
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({ base: "md", md: "xl" })}
          />
        </AspectRatio>
        <FavouriteButton
          position="absolute"
          top="4"
          right="4"
          aria-label={`Add ${name} to your favourites`}
        />
      </Box>
      <Stack>
        <Stack spacing="1">
          <Stack
            spacing={{ base: "1", md: "2" }}
            direction={{ base: "column", md: "row" }}
          >
            <Text
              fontWeight="medium"
              color={useColorModeValue("gray.700", "gray.400")}
            >
              {name}
            </Text>
            {verified && <CircleWavyCheck size={24} />}
          </Stack>
          <Text mt="2">{description}</Text>
          <Wrap
            shouldWrapChildren
            mt="5"
            color={useColorModeValue("gray.600", "gray.300")}
          >
            {tags.map((tag: string) => (
              <Tag key={tag} color="inherit" px="3">
                {tag}
              </Tag>
            ))}
          </Wrap>
        </Stack>
        <HStack>
          <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
            to define fundraising info : tokenomics, total amount raised,
            supporters
          </Text>
        </HStack>
      </Stack>
      <Stack align="center">
        <Button colorScheme="blue" isFullWidth>
          Fund Now
        </Button>
      </Stack>
    </Stack>
  );
};

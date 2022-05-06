import { Box, Text, Stack, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Link } from "@chakra-ui/react";
import * as React from "react";
import { DocumentItem, FAQItem } from "../../types/project.types";
import parse from "html-react-parser";
const Documents = (props: { data: DocumentItem[] }) => {
  const data = props.data;
  if (!data) return <></>;

  return (
      <>
    <Text fontSize="sm" fontWeight="subtle">
    DOCUMENTS
  </Text>
  <Stack>
  {data.map((item: DocumentItem) => (

  
       <Link href={item.url}>{item.title}</Link>

 

))}   </Stack>
</>

  )
};

export default Documents;

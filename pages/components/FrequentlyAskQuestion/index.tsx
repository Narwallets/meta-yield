import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Container, Flex, Heading, Text, Circle, Divider } from '@chakra-ui/react';
import React from 'react';
import { FAQ, Question } from '../../../constants/faq';

type Props = {}

const FrequentlyAskQuestion = (props: Props) => {
  const faq = FAQ;
  return (
    <section>
      <Container id="faq">
        <Flex justifyContent={{ base: 'center', md: 'center' }} flexDirection={{ base: 'column', md: 'column' }} >
          <Heading lineHeight={'133%'} textAlign={'center'} fontWeight={700} color="gray.900" fontSize={'3xl'}> Frequently asked questions</Heading>
          <Text mt={8} textAlign={'center'} fontWeight={400} color="gray.500" fontSize={'lg'}>Everything you need to know about Meta Yield.</Text>
          
          <Accordion mt={'40px'} allowMultiple>
            { 
              faq.map((item: Question, index: any)=> { 
                return ( 
      
                <Box key={'faq'+index}  borderTop={'1px'} borderColor="gray.200" >
                  <AccordionItem >
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton border={'0px'} borderColor="gray.200" pt={10} pb={10}>
                            <Box color="gray.900" fontWeight={600} fontSize={'lg'} flex='1' textAlign='left'>
                              {item.title}
                            </Box>
                            <Circle border={"2px"} m={1} borderColor="indigo.500" borderRadius={100} p={1}>
                            {isExpanded ? (
                              <MinusIcon color="indigo.500"  fontSize='12px' />
                            ) : (
                              <AddIcon color="indigo.500"  fontSize='12px' />
                            )}
                            </Circle>
                            
                          </AccordionButton>
                        </h2>
                        <AccordionPanel fontWeight={400} color="gray.500" dangerouslySetInnerHTML={{ __html: item.text}} pb={4}>
                          
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                </Box>
    
                )
              })
            }
          </Accordion>
        </Flex>
      </Container>

    </section>
  );
};

export default FrequentlyAskQuestion;

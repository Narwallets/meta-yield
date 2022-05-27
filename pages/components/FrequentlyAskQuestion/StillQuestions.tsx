import { Container, Flex, Heading, Text, Button, Spacer } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {}

const StillQuestions = (props: Props) => {
    const router = useRouter();
    const goToFaq = ()=>{
        router.push('/faq')
    }

  return (
    <section>
      <Container mt={20} id="questions">
        <Flex justifyContent={{ base: 'center', md: 'center' }} alignItems={'center'} flexDirection={{ base: 'column', md: 'column' }} >
          <Heading lineHeight={'133%'} textAlign={'center'} fontWeight={700} color="gray.900" fontSize={'xl'}> Still have questions?</Heading>
          <Text  textAlign={'center'} fontWeight={400} color="gray.500" fontSize={'lg'}>Can’t find the answer you’re looking for? Write us your questions and we will be more than happy to help you.</Text>
            <Button mt={10}  onClick={() => goToFaq()} colorScheme="indigo">
                    Get in touch
            </Button>
          
        </Flex>
      </Container>

    </section>
  );
};

export default StillQuestions;

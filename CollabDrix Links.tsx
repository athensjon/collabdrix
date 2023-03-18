import {
  Box,
  Flex,
  VStack,
  Heading,
  Link,
  Avatar,
  Text,
  Input,
  Checkbox,
  Image,
  Table,
  Thead,
  Tr,
  Th,
} from '@chakra-ui/react';

import * as React from 'react';

function Frame(props: React.ComponentProps<typeof Box>) {
  return <Box pos="absolute" {...props} />;
}

function App() {
  return (
    <>
      <Frame width={1280} height={720}>
        <Flex width="1280px" height="720px" className="bg-slate-100" />
      </Frame>
      <Frame width={222} height={720}>
        <VStack
          alignItems="left"
          height="100%"
          spacing="5px"
          paddingY="10px"
          paddingX="10px"
          backgroundColor="rgba(11,21,48,0.9)"
          backdropFilter="auto"
          backdropBlur="10px"
        >
          <Heading
            color="#fff"
            fontWeight="semibold"
            size="md"
            padding="12px 10px"
          >
            {'CollabDrix'}
          </Heading>
          <Link
            padding="8px 10px"
            borderRadius="3px"
            fontSize="12px"
            fontWeight="normal"
            backgroundColor="transparent"
            color="#fff"
          >
            {'Campaigns'}
          </Link>
          <Link
            padding="8px 10px"
            borderRadius="3px"
            fontSize="12px"
            fontWeight="normal"
            backgroundColor="transparent"
            color="#fff"
          >
            {'Dashboard'}
          </Link>
          <Link
            padding="8px 10px"
            borderRadius="3px"
            fontSize="12px"
            fontWeight="medium"
            backgroundColor="rgba(255,255,255,0.1)"
            color="#fff"
          >
            {'Links'}
          </Link>
          <Link
            padding="8px 10px"
            borderRadius="3px"
            fontSize="12px"
            fontWeight="normal"
            backgroundColor="transparent"
            color="#fff"
          >
            {'Invoices'}
          </Link>
          <Link
            padding="8px 10px"
            borderRadius="3px"
            fontSize="12px"
            fontWeight="normal"
            backgroundColor="transparent"
            color="#fff"
          >
            {'Payments'}
          </Link>
          <Link
            padding="8px 10px"
            borderRadius="3px"
            fontSize="12px"
            fontWeight="normal"
            backgroundColor="transparent"
            color="#fff"
          >
            {'Products'}
          </Link>
        </VStack>
      </Frame>
      <Frame left={263} top={30} width={855} height={55}>
        <Flex>
          <Heading flex="1" size="lg" lineHeight="1.3">
            {'Links'}
          </Heading>
        </Flex>
      </Frame>
      <Frame left={1205} top={35} width={38} height={38}>
        <Avatar size="sm" name="Laura Colucci" />
      </Frame>
      <Frame left={222} top={85} width={1058} height={635}>
        <Flex
          width="1058px"
          height="635px"
          className="flex-col bg-transparent p-4 gap-3 items-center justify-center"
        >
          <Flex>
            <Heading flex="1" size="xl" lineHeight="1.3" textAlign="center">
              {'Create link'}
            </Heading>
          </Flex>
          <Text className="mb-4" textAlign="center">
            {
              'We will automatically keep track of engagement and translate it into Revenue Generated'
            }
          </Text>
        </Flex>
      </Frame>
      <Frame left={563} top={458} width={382} height={40}>
        <Input
          value=""
          size="md"
          backgroundColor="rgba(255,255,255,0.9)"
          color="#000"
          borderColor="#eee"
          isDisabled={false}
        />
      </Frame>
      <Frame left={471} top={468} width={169} height={30}>
        <Text>{'Destination:'}</Text>
      </Frame>
      <Frame left={563} top={515} width={382} height={40}>
        <Input
          value=""
          size="md"
          backgroundColor="rgba(255,255,255,0.9)"
          color="#000"
          borderColor="#eee"
          isDisabled={false}
        />
      </Frame>
      <Frame left={513} top={525} width={63} height={30}>
        <Text>{'Title:'}</Text>
      </Frame>
      <Frame left={573} top={586} width={88} height={40}>
        <Checkbox size="lg" isChecked={false} isDisabled={false}>
          {'Othership'}
        </Checkbox>
      </Frame>
      <Frame left={575} top={626} width={88} height={40}>
        <Checkbox size="lg" isChecked={false} isDisabled={false}>
          {'Meijuri'}
        </Checkbox>
      </Frame>
      <Frame left={707} top={586} width={158} height={40}>
        <Checkbox size="lg" isChecked={false} isDisabled={false}>
          {'The Look Lab'}
        </Checkbox>
      </Frame>
      <Frame left={860} top={586} width={158} height={40}>
        <Checkbox size="lg" isChecked={false} isDisabled={false}>
          {'Altea Active'}
        </Checkbox>
      </Frame>
      <Frame left={428} top={591} width={169} height={30}>
        <Text>{'Link to Campaign'}</Text>
      </Frame>
      <Frame left={484} top={95} width={534} height={225}>
        <Image
          src="https://images.unsplash.com/photo-1571019613914-85f342c6a11e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=173&ixid=MnwxfDB8MXxyYW5kb218MHx8Zml0bmVzcyxidXN0ZXJ8fHx8fHwxNjc3NjA1OTc1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=495"
          fit="cover"
          align="middle"
          w="534px"
          h="225px"
          className="rounded"
        />
      </Frame>
      <Frame left={328} top={657} width={200} height={36}>
        <Flex>
          <Heading flex="1" size="sm" lineHeight="1.3">
            {'Active Links'}
          </Heading>
        </Flex>
      </Frame>
      <Frame left={398} top={693} width={645} height={127}>
        <VStack
          alignItems="left"
          height="100%"
          backgroundColor="rgba(255,255,255,0.9)"
          backdropFilter="auto"
          backdropBlur="10px"
          overflowY="auto"
          border="1px solid #eee"
          color="#000"
        >
          <Table size="md">
            <Thead>
              <Tr>
                <Th>{'Link title'}</Th>
                <Th>{'URL'}</Th>
                <Th>{'Campaigns'}</Th>
              </Tr>
            </Thead>
          </Table>
        </VStack>
      </Frame>
    </>
  );
}
export { App };
